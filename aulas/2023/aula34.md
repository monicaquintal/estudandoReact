<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 03: Styled Components.</h2>
</div>

> [Figma do Projeto](https://www.figma.com/community/file/1127351821076435124).

- [`Styled Components`](https://www.npmjs.com/package/styled-components) é uma maneira de estilizar aplicações em React, usando o **conceito CSS-in-JS**, onde escrevemos a estilização no formato da linguagem JS.

### Realizar a instalação: `npm i styled-components` e `npm i @types/styled-components -D`

- no React, é muito comum atribuir estilizações relacionadas à funcionalidade desempenhada pelo elemento, como botões, por exemplo.

~~~jsx
interface ButtonProps {
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'neutral';
}

export function Button() {
  return <button>Enviar</button>;
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)