## ADDED Requirements

### Requirement: Login page route

The frontend SHALL expose a `/login` route that renders a login page matching the Figma layout (`figma/login_page.png`): a left-side visual banner and a right-side card containing the login form, social login options and a link to the signup page.

#### Scenario: User navigates to /login

- **WHEN** the user opens `/login` in the browser
- **THEN** the page renders the auth layout with the login banner on the left
- **AND** displays a card titled "Login" with subtitle "Boas-vindas! Faça seu login."
- **AND** shows fields "Email ou usuário" and "Senha", a "Lembrar-me" checkbox, an "Esqueci a senha" link, a primary "Login" button, a divider "ou entre com outras contas", GitHub and Gmail social buttons, and a "Crie seu cadastro!" link to `/cadastro`

#### Scenario: User submits the login form

- **WHEN** the user fills email and password and clicks the "Login" button
- **THEN** the form invokes the injected `onSubmit` handler with `{ identifier, password, rememberMe }`
- **AND** does not perform any network call itself

#### Scenario: User clicks a social login button

- **WHEN** the user clicks the GitHub or Gmail button
- **THEN** the form invokes `onSocialLogin('github')` or `onSocialLogin('gmail')` respectively

### Requirement: Signup page route

The frontend SHALL expose a `/cadastro` route that reuses the same auth layout as `/login` (banner on the left, card on the right) but with a distinct banner image and a signup-specific form.

#### Scenario: User navigates to /cadastro

- **WHEN** the user opens `/cadastro`
- **THEN** the page renders the auth layout with the signup banner on the left
- **AND** displays a card with a signup form containing fields "Nome", "Email", "Senha" and "Confirmar senha", a primary "Cadastrar" button, and a link back to `/login`

#### Scenario: User submits the signup form with matching passwords

- **WHEN** the user fills all fields and the password and confirmation match
- **AND** clicks the "Cadastrar" button
- **THEN** the form invokes the injected `onSubmit` handler with `{ name, email, password }`

#### Scenario: User submits the signup form with mismatched passwords

- **WHEN** the user submits the form with password and confirmation that differ
- **THEN** the form displays a validation error on the confirmation field
- **AND** does not invoke `onSubmit`

### Requirement: Shared auth layout template

The frontend SHALL provide an `AuthLayout` template under `components/templates/` that accepts `banner` and `children` slots and renders a two-column layout (banner | card) with the application's dark background pattern.

#### Scenario: AuthLayout renders provided slots

- **WHEN** `AuthLayout` is rendered with a banner element and form children
- **THEN** the banner is rendered in the left column and the children in the right column
- **AND** the page background uses the dark "chain links" pattern

### Requirement: Atomic design component organization

All new UI components SHALL be placed under `frontend/src/components/<level>/` where `<level>` is one of `atoms`, `molecules`, `organisms`, `templates`, matching their composition level. Page components SHALL live under `frontend/src/pages/`.

#### Scenario: A primitive UI element is added

- **WHEN** a new primitive UI element such as `Button`, `Input`, `Checkbox` or `Label` is added
- **THEN** it is placed under `components/atoms/<Name>/<Name>.tsx`
- **AND** has a colocated test file `<Name>.test.tsx`

#### Scenario: A composed component is added

- **WHEN** a component composes two or more atoms (e.g. `FormField` = `Label` + `Input` + error message)
- **THEN** it is placed under `components/molecules/`

#### Scenario: A feature section is added

- **WHEN** a feature-level component is added (e.g. `LoginForm`, `SignupForm`, `AuthBanner`)
- **THEN** it is placed under `components/organisms/`

### Requirement: SOLID compliance for auth forms

Auth form organisms SHALL follow SOLID:
- Each form has a single responsibility (collect its own fields and emit values).
- Forms depend on injected handler abstractions, not concrete network/navigation code.

#### Scenario: LoginForm receives onSubmit and onSocialLogin via props

- **WHEN** `LoginForm` is instantiated
- **THEN** it accepts `onSubmit: (values: LoginValues) => void | Promise<void>` and `onSocialLogin: (provider: 'github' | 'gmail') => void` as required props
- **AND** does not import `fetch`, `axios`, router navigation hooks, or any concrete API client

#### Scenario: SignupForm receives onSubmit via props

- **WHEN** `SignupForm` is instantiated
- **THEN** it accepts `onSubmit: (values: SignupValues) => void | Promise<void>` as a required prop
- **AND** does not import any concrete API client or navigation hook

### Requirement: Component test coverage

Every new component (atom, molecule, organism, template, page) SHALL have a colocated test file that covers at least: renders without crashing and the primary interaction or state.

#### Scenario: Tests run with vitest

- **WHEN** `npm test` is executed in `frontend/`
- **THEN** all new component tests pass

### Requirement: Routing setup

The frontend SHALL use `react-router-dom` to wire the routes `/`, `/login` and `/cadastro`. The previous weather-forecast UI SHALL be moved to a `HomePage` component on the `/` route.

#### Scenario: Existing UI is preserved at /

- **WHEN** the user opens `/`
- **THEN** the existing weather forecast UI is rendered

#### Scenario: Unknown route falls back

- **WHEN** the user opens an unknown route
- **THEN** they are redirected to `/` or shown a minimal not-found message
