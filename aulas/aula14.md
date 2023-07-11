<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando React</h1>
<h2>Aula 14: Propriedades no React.</h2>
</div>

- `propriedades` funcionam assim como os atributos dentro das tags HTML.
- são informações variadas que podemos passar para que um componente funcione de forma diferente.

### No projeto:

- criação do componente [RepositoryItem.jsx](../reactjs/01-github-explorer/src/components/RepositoryItem.jsx).

~~~jsx
export function RepositoryItem() {
  return (
    <li>
      <strong>unform</strong>
      <p>Forms in React</p>
      <a href="">
        Acessar repositório
      </a>
    </li>
  );
}
~~~

- inserindo no arquivo [RepositoryList.jsx](../reactjs/01-github-explorer/src/components/RepositoryList.jsx).

~~~jsx
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
~~~

## Propriedade:

- o conceito de proriedade consiste na possibilidade de enviar uma informação ao componente pai (), ao(s) repositório(s) filho(s).
- no exemplo da aula, o RepositoryList() é pai de RepositoryItem().

~~~jsx
// RepositoryList.jsx:

import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository="unform2"/>
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
~~~

~~~jsx
// RepositoryItem.jsx:

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository ?? 'Default'}</strong>
      {/* caso não tenha prop definida, colocará 'Default' no lugar! */}
      <p>Forms in React</p>
      <a href="">
        Acessar repositório
      </a>
    </li>
  );
}
~~~

- podemos, ainda, incluir outras propriedades, como no exemplo anterior, ou criando uma const, como no exemplo abaixo:

~~~jsx
// RepositoryList

import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'estudandoReact',
  description: 'Estudando React',
  link: 'https://github.com/monicaquintal/estudandoReact' 
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository = {repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
~~~

~~~jsx
// RepositoryItem

export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>
        Acessar repositório
      </a>
    </li>
  );
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)