<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h2>Estudando ReactJS</h2>
<p>Rocketseat</p>
</div>

<div align="center">
<h2>Aula 06: Servindo HTML estático.</h2>
</div>

- podemos remover a tag &lt;script&gt; do arquivo [index.html](../reactjs/01-github-explorer/public/index.html).
- no [webpack.config.js](../reactjs/01-github-explorer/webpack.config.js), instalar `yarn add html-webpack-plugin -D`, e importá-lo no arquivo:

~~~javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.jsx'), //define o arquivo inicial da aplicação
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  }
}
~~~

- quando executado `yarn webpack`, será gerado o index.html na pasta dist, já referenciando automaticamente o bundle.js!!!
  - ou seja, faz a referência automaticamente e, em caso de alterações, como renomeando o arquivo, não haverá necessidade de alterar as referências manualmente.

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)