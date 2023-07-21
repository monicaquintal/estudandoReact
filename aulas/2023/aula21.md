<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 21: Estado (useState).</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

## Conceito de Estado:
- por padrão, o React não monitora as variáveis para verificar alterações em seus valores.
- ele monitora apenas as `variáveis do Estado` e, todas as vezes que estas forem alteradas, o React renderizará e exibirá os valores atualizados.
  - é como se o React "fosse avisado" quando realizarmos alterações em uma variável específica!
- o useState não retorna somemnte o valor da variável: **retorna um array de suas posições**.
  - na primeira posição, retornaa própria variável e, na segunda posição, retorna uma função para alterar o valor da variável.
  - portanto, geralmente é utilizado o `conceito de desestruturação`.

### No arquivo [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx):

~~~jsx
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    1,
    2,
  ]) 

  function handleCreateNewComment() {
    event.preventDefault() // evita o comportamento padrão do HTML, de redirecionamento da página, quando utilizamos onSubmit!
    setComments([...comments, comments.length + 1]);
    // conceito de imutabilidade: passamos os valores QUE JÁ EXISTIAM (1 e 2) + o valor inserido (3)!
  }

  return (
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment />
        })}
      </div>
  );
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)