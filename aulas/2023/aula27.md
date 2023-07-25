<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 27: Realizando likes nos comentários.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

- em [Comment.jsx](../../projetos/01-fundamentos-reactjs/src/components/Comment.jsx):

~~~jsx
export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <footer>
      <button onClick={handleLikeComment}>
        <ThumbsUp />
        Aplaudir <span>{likeCount}</span>
      </button>
    </footer>
  );
}
~~~

- ao invés de criar a **função handleLikeComment()**, é possível chamar diretamente a função setLikeCount() no evento onClick do button:

~~~jsx
<footer>
  <button onClick={() => setLikeCount(likeCount + 1)}>
    <ThumbsUp />
    Aplaudir <span>{likeCount}</span>
  </button>
</footer>
~~~

### Importante: os eventos (como onClick) devem sempre receber uma função (como handleLikeComment) e **NUNCA** a execução de uma função (como handleLikeComment()).

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)