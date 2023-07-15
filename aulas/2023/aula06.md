<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 06: Propriedades.</h2>
</div>

- `Propriedades `são informações que podem ser passadas para Componentes no React, assim como atributos passados para as tags HTML.

## Aplicando:

### 1. No arquivo [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx):

~~~jsx
import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post 
        author="Mônica" 
        content="Lorem ipsum dolor sit amet consectetur." 
      />
    </div>
  )
}
~~~

### 2. No arquivo [Post.jsx](../../projetos/01-fundamentos-reactjs/src/Post.jsx):

- é possível acessar essas propriedades, como se fossem parâmetros da função:

~~~jsx
export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}
~~~

### 3. Inserindo um novo Post, com diferentes Propriedades, no arquivo [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx):

~~~jsx
export function App() {
  return (
    <div>
      <Post 
        author="Mônica" 
        content="Lorem ipsum dolor sit amet consectetur." 
      />
      <Post 
        author="João" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ut tenetur laudantium!" 
      />
    </div>
  )
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)