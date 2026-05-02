# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Run the full stack (recommended)
```bash
aspire run
```
Starts both backend and frontend with the Aspire dashboard at `https://localhost:15888`.

### Backend only
```bash
dotnet run --project CodeConnect.Server
```

### Frontend only
```bash
cd frontend && npm run dev
```

### Build
```bash
dotnet build CodeConnect.sln
cd frontend && npm run build
```

### Lint (frontend)
```bash
cd frontend && npm run lint
```

### Add an Aspire integration (e.g. Redis, Postgres)
```bash
aspire add <integration>
```

## Architecture

This is a **.NET Aspire 13** solution targeting **.NET 10**, composed of three projects:

### `CodeConnect.AppHost` — Orchestrator
The entry point for the entire distributed app. `AppHost.cs` wires up resources:
- Registers `CodeConnect.Server` as `"server"` with a `/health` check
- Registers the Vite frontend as `"webfrontend"` with a reference to the server (injects `SERVER_HTTP`/`SERVER_HTTPS` env vars)
- At publish time, the frontend build output is embedded into the server's `wwwroot` via `PublishWithContainerFiles`

### `CodeConnect.Server` — ASP.NET Core 10 backend
Minimal API backend. All routes are grouped under `/api`. `Extensions.cs` (service defaults) wires up:
- OpenTelemetry (traces, metrics, logs) exported via OTLP
- Service discovery via `Microsoft.Extensions.ServiceDiscovery`
- Standard HTTP resilience handlers
- Health endpoints at `/health` (readiness) and `/alive` (liveness), active in Development only

### `frontend` — Vite + React 19 + TypeScript
SPA frontend. In dev mode, Vite proxies `/api/*` to the backend using the `SERVER_HTTPS`/`SERVER_HTTP` env vars injected by Aspire. In production, the compiled output is served as static files directly by the ASP.NET server (`app.UseFileServer()`).

### Data flow
```
Browser → Vite dev server (proxy /api) → ASP.NET Core /api/*
                     OR
Browser → ASP.NET Core (static files + /api/*)   [production]
```

## Frontend conventions

### Atomic Design structure
Components live under `frontend/src/components/` organized by level:

```
components/
  atoms/        # Primitive UI: Button, Input, Badge, Icon
  molecules/    # Composed atoms: SearchBar, FormField, Card
  organisms/    # Feature sections: Header, WeatherTable, Sidebar
  templates/    # Page layouts (no data fetching, only slots/children)
pages/          # Route-level components — wire templates with real data
```

Every new component must be placed at the appropriate level. Prefer atoms/molecules before reaching for an organism.

### Tailwind CSS
All styling via Tailwind utility classes — no separate CSS files for components. Use `cn()` (or `clsx`) to merge conditional classes. Do not mix Tailwind with inline styles or CSS modules.

### Component tests
Every component must have a colocated test file (`ComponentName.test.tsx`) covering its essential use. Tests use Vitest + React Testing Library. Run tests with:
```bash
cd frontend && npm test
```
Focus on behavior (what the user sees/does), not implementation details. At minimum: renders without crashing + primary interaction or state.

## Backend conventions

### SOLID
- Each class/handler has one reason to change (SRP). Split query handlers from command handlers.
- Depend on abstractions (`IWeatherService`), not concrete types — register via DI.
- Avoid god classes; prefer small, focused services and extension methods.

### Specification pattern
Use the Specification pattern for any reusable query predicate that is not provided natively by EF Core (built-in LINQ operators don't need wrapping). A specification encapsulates an `Expression<Func<T, bool>>` and is composed, not duplicated:

```csharp
public interface ISpecification<T>
{
    Expression<Func<T, bool>> ToExpression();
}

// Usage in a query
dbContext.Set<T>().Where(spec.ToExpression())
```

- Create a specification when the same filter logic appears (or would appear) in more than one place.
- Specifications are composable via `.And()` / `.Or()` extension methods — add those helpers once they're needed by a second spec.
- Do **not** wrap trivial single-use EF queries (e.g. `FindByIdAsync`) in a specification — that violates YAGNI.

### YAGNI
- Don't add abstractions, configuration, or generics until a second concrete use case exists.
- No repositories wrapping a single EF `DbContext` call, no base controllers, no response envelope wrappers without a real need.

### REST
- Resources are nouns, plural: `/api/forecasts`, `/api/users/{id}`.
- Use correct HTTP verbs and status codes: `201 Created` with `Location` header on POST, `204 No Content` on DELETE, `404` when a resource is not found.
- Validation errors return `400` with a `ProblemDetails` body (already wired via `AddProblemDetails()`).
- New endpoint groups follow the existing pattern: `app.MapGroup("/api/resource").MapGet(...)`.

## Git

Use **Conventional Commits** for every commit message:

```
<type>(<scope>): <short description>

types: feat | fix | docs | style | refactor | test | chore | perf | ci
scope: frontend | backend | apphost | deps (optional but encouraged)

Examples:
feat(frontend): add WeatherCard atom with temperature toggle
fix(backend): return 404 when forecast id is not found
chore(deps): update Aspire to 13.3.0
test(frontend): add WeatherTable organism smoke test
```

Breaking changes: append `!` after the type (`feat!:`) and add a `BREAKING CHANGE:` footer.
