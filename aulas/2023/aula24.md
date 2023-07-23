<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 24: Comunicação entre componentes.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

### Objetivo: possibilitar que os posts sejam deletados!

- a única forma de comunicar um componente com outro é através de suas propriedades!
- no exemplo da aula, foi passada uma `função` como propriedade, do componente Post para o componente Comment.

1. Em [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx):

~~~jsx
function deleteComment(comment) {
  console.log(`Deletar o comentário ${comment}`);
}

<...>

<div className={styles.commentList}>
  {comments.map(comment => {
      return (
        <Comment 
          key={content} 
          content={comment} 
          onDeleteComment={deleteComment}
        />
      );
  })}
</div>
~~~

2. Em [Comment.jsx](../../projetos/01-fundamentos-reactjs/src/components/Comment.jsx):

~~~jsx
export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }
  return (
  <...>
    <button onClick={handleDeleteComment} title="Deletar comentário">
      <Trash size={24} />
    </button>
  );
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)