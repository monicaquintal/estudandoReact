<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 23: Entendendo a key.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

## Importante:

- neste momento, a aplicaçãoretorna duas mensagens de erro no console:

### Erro 1:

~~~
Warning: Each child in a list should have a unique "key" prop.
Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information.
  at Post (http://localhost:5173/src/components/Post.jsx:25:3)
  at App
printWarning	@	react-jsx-dev-runtime.development.js:87
~~~

- neste caso, em [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx), encontramos uma lista formada pelos Posts que são inseridos.
  - lista = gerada por qualquer estrutura de repetição.
- no React, quando usamos iterações com map, cada componente ou elemento deve ter uma propriedade chamada `key`:
  - a key recebe qualquer valor (n°, string, etc), devendo indicar uma informação única de cada elemento!
  - nesta aplicação, utilizaremos o id!

~~~jsx
{posts.map(posts => {
  return (
    <Post 
      key={posts.id}
      author={posts.author}
      content={posts.content}
      publishedAt={posts.publishedAt}
    />
  )
})}
~~~

### Erro 2: 

~~~
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Post`. See https://reactjs.org/link/warning-keys for more information.
  at p
  at Post (http://localhost:5173/src/components/Post.jsx:25:3)
  at main
  at div
  at div
  at App
~~~

- no arquivo [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx), há duas listas:

1. Lista que retorna o conteúdo dos Posts:

~~~jsx
{content.map(line => {
    if (line.type === 'paragraph') {
      return <p key={line.content}>{line.content}</p>;
    } else if (line.type === 'link') {
      return <p key={line.content}><a href="#">{line.content}</a></p>
    }
})}
~~~

2. Lista de Comentários:

~~~jsx
<div className={styles.commentList}>
  {comments.map(comment => {
    return <Comment key={content} content={comment}/>
  })}
</div>
~~~

- normalmente usamos um id; no exemplo acima, utilizamos o conteúdo, por ser uma aplicação simples, ainda sem integração com o back-end.

### Orientada instalação do [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) para inspecionar a aplicação.

## Keys:

- há 3 principais momentos em que um Componente é renderizado novamente no React:
  - quando o estado altera;
  - quando a propriedade altera;
  - quando um componente pai renderiza novamente (seus filhos também são recalculados em tela).

- quando adicionamos a key, o React irá compará-las com aquelas da antiga lista, e recalculará apenas as que não estavam renderizadas!
- não utilizamos índices de arrays pois, apesar de serem únicos, suas posições podem variar de acordo com a aplicação ou manipulação, o que poderia fazer com que o React renderizasse toda a lista novamente!

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)