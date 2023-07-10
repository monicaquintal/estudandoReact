<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando React</h1>
<h2>Aula 13: Primeiro componente React.</h2>
</div>

## Componente:
- são formas de encapsular uma quantidade de código dentro de um único elemento, que tem sua própria funcionalidade, estilização e estrutura.
- componentes são formas de organizar/dividir a aplicação.
- o arquivo App.jsx, por exemplo, é um componente!

### Importante:
- são funções.
- nome iniciado sempre com a 1ª letra maiúscula.
- retorna um HTML.
- convenciona-se ter sempre um componente por arquivo.

## Criando um novo componente:
- criação da pasta [Components](../reactjs/01-github-explorer/src/components), e do componente [RepositoryList.jsx](../reactjs/01-github-explorer/src/components/RepositoryList.jsx).

~~~jsx
export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <li>
          <strong>unform</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
      </ul>
    </section>
  );
}
~~~

- importando o componente em [App.jsx](../reactjs/01-github-explorer/src/App.jsx).

~~~jsx
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return <RepositoryList />
}
~~~

- editando o arquivo [global.scss](../reactjs/01-github-explorer/src/styles/global.scss).

~~~scss
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 16px "Hervetica Neve", Arial, sans-serif;
  color: #121214;
}
~~~

## Observação:

- a transição entre HTML e JS torna-se mais naturalcom a utilização de componentes, exemplo:

~~~jsx
const repositoryName = 'unform2';

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>
          <a href="">Acessar repositório</a>
        </li>
  )
}  
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)