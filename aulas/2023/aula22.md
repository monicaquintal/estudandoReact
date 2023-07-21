<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 22: Inserindo comentários (Programação declarativa).</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

- como armazenar o texto inserido pelo usuário na textarea?

### Conceitos:

- há duas formas de programação:
  - programação imperativa:
    - dizemos ao software o que deve ser feito (passo a passo).
    - evitada no React.
    - exemplo:

~~~jsx
  function handleCreateNewComment() {
    event.preventDefault();
    const newCommentText = event.target.comment.value;
    setComments([...comments, newCommentText]);
    event.target.comment.value  = '';
  }
~~~

  - programação declarativa:
    - ao invés de falar como fazer, apenas declaramos qual é o resultado esperado.
    - passamos as condições para obtermos o resultado final!
    - é a utilizada em React!!!
    - logo, no arquivo [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx):

~~~jsx
export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Muito bom! 👏'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  };

  return (
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name = "comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
  );
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)