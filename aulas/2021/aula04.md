<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 04: Configurando Babel.</h2>
</div>

- [Babel](https://babeljs.io/) é uma ferramenta/biblioteca utilizada para converter nosso código para uma maneira que todos os browsers e ambientes/navegadores consigam entender os códigos.
  - `yarn add --dev @babel/core @babel/cli @babel/preset-env -D`
  - o -d indica que trata-se da dependência de desenvolvimento, ou seja, qu não utilizará nenhuma dessas dependências quando o projeto for online/produção.

- criar um arquivop [babel.config.js](../reactjs/01-github-explorer/babel.config.js)

~~~javascript
module.exports = {
  presets: [
    '@babel/preset-env'
    // extensão do babel que identifica onde a aplicação está sendo executada,
    // para realizar as conversões das funcionalidades!
  ]
};
~~~

- criar o arquivo [index.js](../reactjs/01-github-explorer/src/index.js) no src.
  - para a finalidade de exemplificar a conversão do código JS, inserir o exemplo:

~~~javascript
const user = {
  name: 'Mônica',
}

console.log(user.address?.street);
~~~

- executar `yarn babel src/index.js --out-file dist/bundle.js`.
  - a partir de src/index js, cria a psta dist e o arquivo bundle.js, que conterá o código:

~~~javascript
"use strict";

var _user$address;
var user = {
  name: 'Mônica'
};
console.log((_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street);
// é de difícil entendimento, não trabalhamos neste arquivo!!! 
// apenas convertemos os arquivos para este formato, para que seja entendido por diversos navegadores.
~~~

- para utilizar o React, instalar a biblioteca: `yarn add @babel/preset-react -d`
(e atualizar o arquivo babel.config.js)

- converter index.js em [index.jsx](../reactjs/01-github-explorer/src/index.jsx)!
  - o bundle deve ser sempre .js.


---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)