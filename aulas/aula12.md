<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 12: Utilizando SASS.</h2>
</div>

- [SASS](https://sass-lang.com/) é um pré-processador do CSS, que habilita mais funcionalidades, como encadeamento, ouras funções, etc.

- instalar `yarn add sass-loader -D` e `yarn add node-sass -D`.

- no [webpack.config.js](../reactjs/01-github-explorer/webpack.config.js):

~~~javascript
{
  test: /\.scss$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}
~~~

- renomear o arquivo global para `global.scss`, e no Arquivo [App.jsx](../reactjs/01-github-explorer/src/App.jsx):

~~~jsx
import './styles/global.scss';

export function App() {
  return <h1>Hello ReactJS! 🚀</h1>
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)