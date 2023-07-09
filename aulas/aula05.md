<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 05: Configurando Webpack.</h2>
</div>

- muitas vezes utilizado em conjunto com o Babel.
- estipula configurações (loaders), que "ensinam" a aplicação como deve tratar os diferentes tipos de arquivos importados, como JSON, CSS, SASS, imagens, etcm tornando-os "legíveis" pelo browser.
- para instalar: `yarn add webpack-cli -D`

~~~javascript
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'), //define o arquivo inicial da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        //test recebe expressão regular que determina se o arquivo é js
        exclude: /node_modules/,
        //exclui arquivos node_modules, não convertendo-os (é responsab// da biblioteca)
        use: 'babel-loader'
        //dependência que será instalada também
        //faz integração entre babel e webpack
      }
    ]
  }
}
~~~

- `yarn add babel-loader -D`

- para testar se tudo está funcionando:
  - no src, criar um arquivo [App.jsx](../reactjs/01-github-explorer/src/App.jsx).
  - exportar uma função App:

~~~jsx
export function App() {
  return <h1>Hello World! 🌎</h1>
}
~~~

    - no index.jsx, importar do arquivo App a função App.

~~~jsx
import React from 'react';
import { App } from './App'
~~~

  - executar: `yarn webpack` e verificar o arquivo [bundle.js](../reactjs/01-github-explorer/dist/bundle.js).


---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)