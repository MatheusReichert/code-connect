## Why

A aplicação ainda não possui telas de autenticação. Antes de adicionar qualquer funcionalidade restrita por usuário, precisamos das páginas de **Login** e **Cadastro** que sigam a identidade visual definida no Figma (`figma/login_page.png`, `figma/banner.png`) e que sirvam como referência da estrutura de Atomic Design + componentes reutilizáveis para o restante do frontend.

## What Changes

- Adicionar a rota `/login` com a página de login conforme o layout do Figma (banner lateral + formulário com email/usuário, senha, "lembrar-me", "esqueci a senha", botão de login, login social via GitHub e Gmail e link para cadastro).
- Adicionar a rota `/cadastro` reutilizando o mesmo layout (template) com banner próprio e formulário com campos diferentes (nome, email, senha, confirmação de senha).
- Introduzir um conjunto de **atoms/molecules/organisms** reutilizáveis (`Button`, `Input`, `FormField`, `Checkbox`, `SocialLoginButton`, `AuthBanner`, `AuthForm`) que respeitem SOLID — em especial SRP e DIP (formulários consomem abstrações de submit, não acoplam a fetch).
- Criar um **template** `AuthLayout` que recebe `banner` e `children` (form) como slots, eliminando duplicação entre login e cadastro.
- Configurar **react-router-dom** no frontend (ainda não existe) e mover a UI atual para uma rota distinta de `/`.
- Importar os assets `github.png`, `gmail.png` e `banner.png` (e o banner de cadastro quando fornecido) para `frontend/src/assets/`.

Nenhuma chamada real de autenticação no backend é parte deste change — os formulários submetem para um handler injetado (stub que apenas loga/console). A integração com API fica para um change posterior.

## Capabilities

### New Capabilities
- `auth-pages`: Páginas e componentes de UI para login e cadastro de usuários, incluindo layout compartilhado, formulários específicos e botões de login social (sem integração de backend).

### Modified Capabilities
<!-- nenhum spec existente é modificado -->

## Impact

- **Frontend (`frontend/`)**:
  - Novas dependências: `react-router-dom`, `clsx` (para `cn()` helper, se ainda não estiver presente).
  - Novos diretórios: `src/components/atoms`, `src/components/molecules`, `src/components/organisms`, `src/components/templates`, `src/pages`, `src/assets`.
  - `App.tsx` passa a renderizar um `<RouterProvider>`; a UI atual de weather migra para `pages/HomePage.tsx` na rota `/`.
  - Testes colocalizados (`*.test.tsx`) para cada novo componente.
- **Backend**: nenhum impacto neste change.
- **AppHost**: nenhum impacto.
