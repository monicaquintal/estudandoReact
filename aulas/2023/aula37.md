<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 06: Estilos globais.</h2>
</div>

> [Figma do Projeto](https://www.figma.com/community/file/1127351821076435124).

- criado arquivo [global.ts](../../projetos/02-ignite-timer/src/styles/global.ts), dentro de src/styles.

~~~ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #333;
    color: #FFF;
  }
`;
~~~

- em [App.tsx](../../projetos/02-ignite-timer/src/App.tsx):

~~~tsx
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)