<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 07: Cores & fonte.</h2>
</div>

> [Figma do Projeto](https://www.figma.com/community/file/1127351821076435124).

### 1. Em [index.html](../../projetos/02-ignite-timer/index.html):

~~~html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    <title>Ignite Timer ⏱️</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
~~~

### 2. Em [global.ts](../../projetos/02-ignite-timer/src/styles/global.ts), definidos os estilos globais:

~~~ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  }

  body {
    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
~~~

### 3. Definindo as cores em [default.ts](../../projetos/02-ignite-timer/src/styles/themes/default.ts):

~~~ts
export const defaultTheme = {
  white: '#FFF',

  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-500': '#7C7C8A',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'yellow-500': '#FBA94C'
}
~~~

### 4. Em [Button.styles.ts](../../projetos/02-ignite-timer/src/components/Button.styles.ts):

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
  border-radius: 4px;
  border: 0;
  margin: 8px;
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`;
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)