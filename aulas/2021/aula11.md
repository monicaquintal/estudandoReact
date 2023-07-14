<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 11: Importando arquivos CSS.</h2>
</div>

- criado diretório [styles](../reactjs/01-github-explorer/src/styles) dentro do src, e arquivo [global.css](../reactjs/01-github-explorer/src/styles/global.css).
- para importar o CSS:
  - em [webpack.config.js](../reactjs/01-github-explorer/webpack.config.js):
    - instalar dois loaders: `yarn add style-loader css-loader -D`, e executar `yarn dev`.
    - criar uma nova regra para arquivos CSS:

~~~javascript
{
  test: /\.css$/,
  exclude: /node_modules/,
  use: ['style-loader', 'css-loader']
}
~~~

- no arquivo [App.jsx](../reactjs/01-github-explorer/src/App.jsx):

~~~jsx
import './styles/global.css';

export function App() {
  return <h1>Hello ReactJS! 🚀</h1>
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)