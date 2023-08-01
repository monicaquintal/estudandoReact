<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 03: Styled Components.</h2>
</div>

> [Figma do Projeto](https://www.figma.com/community/file/1127351821076435124).

- [`Styled Components`](https://www.npmjs.com/package/styled-components) é uma maneira de estilizar aplicações em React, usando o **conceito CSS-in-JS**, onde escrevemos a estilização no formato da linguagem JS.

- Realizar a instalação: `npm i styled-components` e `npm i @types/styled-components -D`
  - instalar também a extensão vscode-styled-components no VS Code.

- no React, é muito comum atribuir estilizações relacionadas à funcionalidade desempenhada pelo elemento, como botões, por exemplo.

1. Em Button.tsx:

~~~tsx
import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
~~~

2. Em App.tsx:

~~~tsx
import { Button } from "./components/Button";

export function App() {
  return (
    <>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </>
  )
}
~~~

3. Em Button.styles.ts:

~~~ts
import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }}
`;
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)