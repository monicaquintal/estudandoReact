<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 25: Removendo comentários (imutabilidade).</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

## Imutabilidade:
- as variáveis não sofrem mutação = nunca alteramos o valor de uma variável na memória, apenas criamos um novo espaço na memória.
- ou seja, não atualizaremos o valor da variável comentários, e sim criaremos um novo valor.
- criar um novo valor na memória é mais rápido pro React, do que monitorar as alterações realizadas.

### Na aplicação:
- criaremos uma nova lista de comentários, REMOVENDO o comentário que desejamos excluir.
- portanto, em [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx):

~~~jsx
function deleteComment(commentToDelete) {
  const commentsWithoutDeletedOne = comments.filter(comment => {
    return comment !== commentToDelete;
  })
  setComments(commentsWithoutDeletedOne);
}

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

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)