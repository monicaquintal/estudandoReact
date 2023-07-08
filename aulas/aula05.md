<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h2>Estudando ReactJS</h2>
<p>Rocketseat</p>
</div>

<div align="center">
<h2>Aula 05: Estrutura do ReactJS.</h2>
</div>

- no [index.html](../reactjs/01-github-explorer/public/index.html), não estará a estrutura da página; haverá **apenas um único elemento no body, chamado de `root`**!
  - a aplicação React será construída dentro desta div.

~~~html
<div id="root"></div>
~~~

- em [index.jsx](../reactjs/01-github-explorer/src/index.jsx), importar de dentro do pacote react-dom, uma função chamada render.

~~~javascript
import React from 'react';
import { render } from 'react-dom';
import { App } from './App'

render(<h1>Hello World! 🙋‍♀️🌎</h1>, document.getElementById('root'))
// dois parâmetros:
// 1. o que quero renderizar, exibir em tela.
// 2. dentro de qual elemento quero renderizar a informação
~~~

- adicionar a tag &lt;script&gt; no arquivo [index.html](../reactjs/01-github-explorer/public/index.html).

~~~html
<div id="root"></div>
<script src="../dist/bundle.js"></script>
~~~

- executar `yarn webpack` e visualizar o arquivo com Live Server!

### Observação:

- atualmente, não precisamos importar o React em cada um dor arquivos em que utilizaremos HTML.
- portanto:
  - remover a primeira linha do código acima (import React from 'react';)
  - em [babel.config.js](../reactjs/01-github-explorer/babel.config.js), alterar a configuração para:

~~~javascript
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
};
~~~

- após executar `yarn webpack`, não será retornada mensagem de erro, e será exibido normalmente no browser.

- ao invés de utilizar as tags HTML no arquivo [index.jsx](../reactjs/01-github-explorer/src/index.jsx), podemos também importar a função App(), criada no arquivo [App.jsx](../reactjs/01-github-explorer/src/App.jsx), da seguinte forma:

~~~javascript
import { render } from 'react-dom';
import { App } from './App'

render(<App/>, document.getElementById('root'))
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)