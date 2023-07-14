<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 05: Componentes.</h2>
</div>

- forma de desacoplar uma parte da interface, para que se torne possível de repetir, ou mais fácil de dar manutenção, por ser um trecho menor.
- trata-se de uma função (JS) que retorna HTML.
- todos os componentes precisam ter extensão `.jsx` (JS + XML).

## Aplicando:

### 1. Criado arquivo [Post.jsx](../../projetos/01-fundamentos-reactjs/src/Post.jsx).

~~~jsx
function Post() {
  return <p>Post</p>
}

export default Post
// método utilizado para exportar a função
~~~

### 2. Importado em [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx):

~~~jsx
import Post from "./Post";
// importado Componente Post.jsx

function App() {
  return (
    <Post />
  )
}

export default App
~~~

## Observações importantes:

### 1. O React não permite vários Componentes um abaixo do outro:

- deve existir um elemento ao redor destes componentes.
- portanto, utiliza-se, por exemplo, uma div ao redor destes elementos, como abaixo:

~~~jsx
function App() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
~~~

### 2. Há diversas formas de importação entre Componentes:

- uma das possibilidades é a exemplificada anteriormente, chamada de `Default Exports`.
  - vantagens: é possível dar um nome diferente na importação (o que pode ser considerado uma desvantagem, por criar confusão/esquecimento na alteração).

~~~jsx
export default App
~~~

- já nas chamadas `Named Exports`:
  - o nome do Componente na função precisa ser exatamente o importado, evitando confusão!

~~~jsx
export function Button() {
  return <p>Button</p>
}

// e na importação do Componente:
import { Button } from './Button';
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)