<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 04: Configurando temas.</h2>
</div>

> [Figma do Projeto](https://www.figma.com/community/file/1127351821076435124).

- `Styled Components` permite realizar a gestão de temas da aplicação, controlados por JS.

### No projeto:

- criado arquivo [default.ts](../../projetos/02-ignite-timer/src/styles/default.ts), na pasta styles, dentro de src.

~~~ts
export const defaultTheme = {
  primary: 'purple',
  secondary: 'orange',
  white: '#FFF'
}
~~~

- em [App.tsx](../../projetos/02-ignite-timer/src/App.tsx):

~~~tsx
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  )
}
~~~

- em [Button.styles.ts](../../projetos/02-ignite-timer/src/components/Button.styles.ts):

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

  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.white};
  border-radius: 4px;
  border: 0;
  margin: 8px;
  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`;
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)