<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 04: Criando um projeto React.</h2>
</div>

> utilizado [Vite](https://vitejs.dev/).

1. Instalar o [Node](https://nodejs.org/en). 
    - instalar a versão LTS.
    - utilizar um version manager, como [nvm](https://github.com/nvm-sh/nvm) ou [n, usado pelo prof!](https://github.com/tj/n)
2. No [site do Vite](https://vitejs.dev/), clicar em `Get Started`.
    - executar o comando `$ npm create vite@latest` na pasta desejada.
    - (y) para confirmar a criação do projeto.
    - informar o nome do projeto.
    - selecionar a biblioteca: nesse caso, "React".
    - selecionar JS.
3. No VSCode, abrir a pasta criada.
    - no terminal do VSCode, executar `npm install` e `npm run dev`.
    - abrir o arquivo na porta/local indicado.
    - **observação**: o Vite já traz o Fast Refresh configurado (quando fazemos uma alteração no código, ela já é refletida automaticamente no browser).
4. "Limpar" a estrutura antes de iniciar:
    - remover da pasta src todos os arquivos: svg, css (restando apenas os arquivos [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx) e [main.jsx](../../projetos/01-fundamentos-reactjs/src/main.jsx)).
    - no arquivo [main.jsx](../../projetos/01-fundamentos-reactjs/src/main.jsx):
      - remover a importação do arquivo CSS.
    - no arquivo [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx):
      - remover a importação do arquivo CSS e do arquivo svg.
      -  retirar tudo que há dentro do return da function App().

## Entendo a estrutura:

### Arquivo [index.html](../../projetos/01-fundamentos-reactjs/index.html):
- primeiro arquivo carregado pela aplicação web.

~~~html
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
<!-- Vite utiliza os ECMA Script Modules nativos do browser.
src indica que o arquivo JS que a aplicação carrega é o main.jsx -->
~~~ 

### Arquivo [main.jsx](../../projetos/01-fundamentos-reactjs/src/main.jsx):

~~~jsx
// este arquivo importa o react, react-dom/client e App!
import React from 'react' // biblioteca
import ReactDOM from 'react-dom/client' // integra com a DOM (HTML), com o browser
import App from './App.jsx' // arquivo onde inserimos o "hello world"

// método ReactDOM recebe como parâmetro o elemento raiz (root) da página HTML!
// ou seja, tudo é criado dentro da div root!
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
)
~~~

### Arquivo [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx):

~~~jsx
// é uma função quie retorna HTML!

function App() {
  return (
    <h1>Hello World! 🌎</h1>
  )
}

export default App
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)