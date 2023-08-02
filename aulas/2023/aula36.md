<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 05: Tipagem de temas.</h2>
</div>

> [Figma do Projeto](https://www.figma.com/community/file/1127351821076435124).

- criado arquivo [styles.d.ts](../../projetos/02-ignite-timer/src/@types/styles.d.ts), dentro de src/@types.
  - o 'd.ts' indica que nesse arquivo ficarão apenas códigos de definição de tipos do typescript.

~~~ts
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)