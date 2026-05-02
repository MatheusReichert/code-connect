## 1. Setup e dependências

- [x] 1.1 Adicionar `react-router-dom` e `clsx` ao `frontend/package.json` e instalar
- [x] 1.2 Criar `frontend/src/lib/cn.ts` com helper `cn(...)` baseado em `clsx`
- [x] 1.3 Configurar `tailwind.config` com cores customizadas (`bg-base`, `bg-card`, `accent`, `muted`)
- [x] 1.4 Copiar `figma/banner.png`, `figma/github.png`, `figma/gmail.png` para `frontend/src/assets/` (renomear `banner.png` → `login_banner.png`; usar placeholder `signup_banner.png`)

## 2. Estrutura de diretórios

- [x] 2.1 Criar pastas `components/{atoms,molecules,organisms,templates}` e `pages/` em `frontend/src`
- [x] 2.2 Criar `frontend/src/routes.tsx` exportando o router com `/`, `/login`, `/cadastro`
- [x] 2.3 Atualizar `App.tsx` para renderizar `<RouterProvider router={router} />`
- [x] 2.4 Mover UI atual de weather para `pages/HomePage/HomePage.tsx` + teste

## 3. Atoms

- [x] 3.1 `Button` (variantes `primary`, `ghost`, `social`) + teste
- [x] 3.2 `Input` (controlado, suporta `error`) + teste
- [x] 3.3 `Checkbox` (controlado, label opcional) + teste
- [x] 3.4 `Label` + teste
- [x] 3.5 `Link` (wrapper de `react-router-dom` `Link` com estilo padrão) + teste
- [x] 3.6 `Logo` (logo "code connect" inline SVG ou img) + teste

## 4. Molecules

- [x] 4.1 `FormField` compondo `Label` + `Input` + mensagem de erro + teste
- [x] 4.2 `SocialLoginButton` (props: `provider`, `onClick`) + teste cobrindo click
- [x] 4.3 `OrDivider` (linha com texto centralizado) + teste

## 5. Organisms

- [x] 5.1 `AuthBanner` (recebe `imageSrc` e renderiza com `Logo` sobreposto) + teste
- [x] 5.2 `SocialLoginGroup` (renderiza GitHub + Gmail, repassa `onSocialLogin`) + teste
- [x] 5.3 `LoginForm` (props: `onSubmit`, `onSocialLogin`) + teste cobrindo submit e click social
- [x] 5.4 `SignupForm` (props: `onSubmit`) + teste cobrindo submit válido e erro de senha não confere

## 6. Template

- [x] 6.1 `AuthLayout` (props: `banner`, `children`) com background pattern + teste

## 7. Pages

- [x] 7.1 `LoginPage` compondo `AuthLayout` + `LoginForm` + `SocialLoginGroup` + link para `/cadastro` + teste
- [x] 7.2 `SignupPage` compondo `AuthLayout` + `SignupForm` + link para `/login` + teste

## 8. Verificação

- [x] 8.1 Rodar `npm run lint` no `frontend/` e corrigir issues
- [x] 8.2 Rodar `npm test` no `frontend/` e garantir que todos os testes passem
- [ ] 8.3 Rodar `aspire run` e validar manualmente `/`, `/login`, `/cadastro` no navegador
- [ ] 8.4 Conferir que o layout em `/login` corresponde ao `figma/login_page.png`
