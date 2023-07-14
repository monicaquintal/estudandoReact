<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 09: Utilizando source maps.</h2>
</div>

- Funcionalidade `Source maps` do webpack: trata-se de uma forma de conseguir visualizar o código original da aplicação, mesmo quando está embaralhado na forma do bundle.js!
- em [webpack.config.js](../reactjs/01-github-explorer/webpack.config.js), incluir:

~~~javascript
devtool: 'eval-source-map',
~~~

- exemplificado através da inserção de um erro no arquivo [App.jsx](../reactjs/01-github-explorer/src/App.jsx).

~~~jsx
export function App() {
  throw new Error('Eita, Giovanna, o forninho caiu!')
  return <h1>Hello ReactJS! 🤖</h1>
}
~~~

- antes do Source maps, não era mostrada exatamente a localização do erro; após sua inclusão, basta clicar no erro (quando abrimos o devtools do navegador), que ele exibirá corretamente a linha e o local/arquivo!

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)