## Context

O frontend hoje é um SPA Vite + React 19 com um único componente raiz (`App.tsx`) que renderiza a tela de weather forecast. Não há roteamento, não há sistema de design implementado e os diretórios `atoms/molecules/organisms/templates/pages` previstos no `CLAUDE.md` ainda não existem.

A tela de Login do Figma combina dois blocos: um banner visual à esquerda (imagem ilustrativa fixa por página) e um cartão de autenticação à direita (formulário + login social + link para a outra rota). A tela de Cadastro reaproveita exatamente esta estrutura, trocando apenas o banner e os campos do formulário.

Stakeholders: o usuário (dev solo neste change). Constraints: SOLID no frontend, Tailwind para estilo, testes colocalizados via Vitest, identidade visual escura com destaque verde-neon (`#A6F47B`/similar) já presente no Figma.

## Goals / Non-Goals

**Goals:**
- Entregar páginas `/login` e `/cadastro` pixel-próximas ao Figma.
- Estabelecer a base de Atomic Design no `frontend/src/components/` que vai ser reutilizada nas próximas features.
- Aplicar SOLID de forma pragmática: SRP nos componentes, DIP nos formulários (recebem `onSubmit` por prop, não conhecem fetch nem URLs), OCP no `AuthLayout` (extensível via slots).
- Adicionar `react-router-dom` e migrar a tela atual para `pages/HomePage.tsx` em `/`.

**Non-Goals:**
- Integração real de autenticação (endpoints, JWT, OAuth de verdade com GitHub/Gmail). Os botões sociais e o submit do form chamam handlers stub.
- Validação avançada (Zod, react-hook-form). Use estado local + validação HTML básica neste primeiro passe.
- i18n. Os textos ficam em pt-BR hardcoded conforme o Figma.
- Persistência do "lembrar-me".

## Decisions

### 1. Estrutura de Atomic Design

```
frontend/src/
  assets/           # banner.png, github.png, gmail.png, banner_signup.png (placeholder)
  components/
    atoms/
      Button/         # variantes: primary, ghost, social
      Input/          # input controlado, com estados focus/error
      Checkbox/
      Label/
      Link/           # wrapper de <Link> do router com estilo padrão
      Logo/           # logo "code connect" pequeno no canto do banner
    molecules/
      FormField/      # Label + Input + mensagem de erro (composição de atoms)
      SocialLoginButton/  # ícone + label, recebe `provider: 'github' | 'gmail'`
      OrDivider/      # "—— ou entre com outras contas ——"
    organisms/
      AuthBanner/     # imagem lateral + logo sobreposta
      LoginForm/      # form específico de login
      SignupForm/     # form específico de cadastro
      SocialLoginGroup/  # agrupa os SocialLoginButton
    templates/
      AuthLayout/     # 2 colunas (banner | card), recebe `banner` e `children`
  pages/
    LoginPage/        # compõe AuthLayout + LoginForm
    SignupPage/       # compõe AuthLayout + SignupForm
    HomePage/         # weather forecast atual movido para cá
  routes.tsx          # configuração do react-router-dom
```

**Por quê** essa divisão: cada nível tem uma responsabilidade clara. `LoginForm` e `SignupForm` são organismos distintos porque têm campos e estado próprios — tentar generificar com um `<AuthForm fields={...}>` seria abstração prematura (YAGNI) e violaria SRP do componente genérico. `AuthLayout` é o ponto de reuso real.

**Alternativa considerada:** um único `<AuthForm fields={[...]} onSubmit={...} />` parametrizado. Rejeitado: cada form tem regras próprias (ex.: confirmação de senha), e parametrizar campos vira um mini-framework dentro do componente.

### 2. SOLID aplicado

- **SRP**: `LoginForm` cuida apenas de coletar credenciais e chamar `onSubmit`. Não conhece rota, não navega. Quem navega é `LoginPage`.
- **OCP/DIP**: `LoginForm` e `SignupForm` recebem props `onSubmit: (values) => Promise<void>` e `onSocialLogin: (provider) => void`. Em testes, passamos stubs. Em prod, `LoginPage` injeta a implementação real (neste change, apenas console.log).
- **ISP**: Tipos de props pequenos e focados (`LoginFormProps`, `SignupFormProps`), não um `AuthFormProps` gigante.
- **LSP**: `Button` aceita `variant` mas mantém o contrato de `<button>` nativo (estende `ButtonHTMLAttributes`).

### 3. Roteamento

Adicionar `react-router-dom` v6+. `routes.tsx` exporta o `createBrowserRouter` com:
- `/` → `HomePage`
- `/login` → `LoginPage`
- `/cadastro` → `SignupPage`

`App.tsx` vira apenas `<RouterProvider router={router} />`.

**Alternativa considerada:** `wouter` (mais leve). Rejeitado: `react-router-dom` é o padrão do ecossistema React e provavelmente será necessário para guards futuros.

### 4. Estilo

- Tailwind utility-first conforme convenção do projeto.
- Cores customizadas no `tailwind.config` (se existir) ou via classes inline com valores arbitrários — usar a paleta do Figma:
  - Background: `#0B1014` (quase-preto azulado).
  - Card: `#1A1F24`.
  - Accent verde: `#A6F47B`.
  - Texto secundário: `#9CA3AF`.
- O background da página tem o padrão de "elos de corrente" do `banner.png` da raiz: aplicar como `background-image` no `AuthLayout`.
- Helper `cn(...)` em `src/lib/cn.ts` usando `clsx`.

### 5. Login social (visual apenas)

`SocialLoginButton` recebe `provider` e renderiza ícone + label. Os PNGs `github.png` e `gmail.png` ficam em `src/assets/` e são importados como módulos Vite. Click chama `onSocialLogin(provider)` — neste change, apenas `console.log`.

### 6. Banner de cadastro

O Figma fornecido só tem o banner de login. Para cadastro, usaremos um placeholder (cor sólida + logo) marcado com `TODO` no comentário do componente. Quando o asset chegar, basta trocar o `import` em `SignupPage`.

## Risks / Trade-offs

- **[Risco]** Adicionar `react-router-dom` muda o entrypoint do app — pode quebrar testes existentes do `App.tsx`. → **Mitigação**: atualizar/remover o teste de `App.test.tsx` e cobrir as páginas individualmente.
- **[Risco]** Estilos arbitrários (`bg-[#0B1014]`) espalhados pelo código dificultam mudanças de tema. → **Mitigação**: centralizar em `tailwind.config.ts` (extend colors) já neste change.
- **[Risco]** Sem `react-hook-form`/Zod, validação fica fraca. → **Trade-off aceito**: este change é só UI; validação robusta vem com a integração de backend.
- **[Risco]** Os PNGs de logo social podem ficar pixelados em telas hi-DPI. → **Mitigação**: importar como `<img>` com largura fixa pequena (24px). Caso necessário, substituir por SVG depois.
