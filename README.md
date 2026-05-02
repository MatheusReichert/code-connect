# code-connect

Projeto desenvolvido como parte do curso [Engenharia de Software com IA no fluxo real de desenvolvimento](https://cursos.alura.com.br/course/engenharia-software-ia-no-fluxo-real-de-desenvolvimento) da Alura.

## Stack

- **.NET Aspire 13** orquestrando os serviços
- **ASP.NET Core 10** (`CodeConnect.Server`) — API minimal sob `/api`
- **Vite + React 19 + TypeScript** (`frontend/`) — SPA com Atomic Design e Tailwind
- **OpenSpec** (`openspec/`) — propostas de mudança e specs versionadas

## Como rodar

```bash
aspire run
```

Sobe backend, frontend e o dashboard do Aspire em `https://localhost:15888`.

Mais detalhes em [`CLAUDE.md`](./CLAUDE.md).
