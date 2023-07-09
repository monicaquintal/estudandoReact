<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h2>Estudando ReactJS</h2>
<p>Rocketseat</p>
</div>

<div align="center">
<h2>Aula 09: Ambiente dev e produção.</h2>
</div>

- configurar um ambiente de desenvolvimento e um de produção, nos quais o webpack se comportará de formas diferentes.


### No arquivo [webpack.config.js](../reactjs/01-github-explorer/webpack.config.js):

~~~javascript
const isDevelopment = process.env.NODE_ENV !== 'production';
// NODE_ENV: variável comum;
// usada para identificar se o ambiente é de desenvolvimento ou produção.

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map';
~~~

### Para criar a variável `NODE_ENV`, há algumas formas:
- caso sejaLinux ou mac, no terminal, `NODE_ENV=production yarn webpack`, o que não funciona no windows.
- para criar variáveis de ambiente, independente do SO: `yarn add cross-env -D`.
  - e no [package.json](../reactjs/01-github-explorer/package.json), criar alguns scripts (atalhos) acima das dependências:

~~~json
"scripts": {
  "dev": "webpack serve",
  "build": "cross-env NODE_ENV=production webpack"
},
~~~

- executar `yarn dev`: executará o projeto para ambiente de desenvolvimento!
  - `yarn build` executará para ambiente de produção.

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)