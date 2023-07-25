<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 26: Validando formulário.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

### Em [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx):

1. a princípio, é possível fazer a validação através do HTML, com o atributo required:

~~~jsx
<textarea 
  name = "comment"
  placeholder="Deixe um comentário"
  value={newCommentText}
  onChange={handleNewCommentChange}
  required
// required ou required={true}
/>
~~~

2. é possível alterar a mensagem de "Preencha este campo.", utilizando a propriedade `onInvalid`:

~~~jsx
function handleNewCommentChange() {
  event.target.setCustomValidity('');  
  setNewCommentText(event.target.value);
};

function handleNewCommentInvalid() {
  event.target.setCustomValidity('Esse campo é obrigatório!!!');  
}

<textarea 
  name = "comment"
  placeholder="Deixe um comentário"
  value={newCommentText}
  onChange={handleNewCommentChange}
  onInvalid={handleNewCommentInvalid}
  required
/>
~~~

3. é possível bloquear o botão "Publicar" caso não atenda a validação.

~~~jsx
const isNewCommentEmpty = newCommentText.length === 0;

<footer>
  <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
</footer>
~~~

E no arquivo [Post.module.css](../../projetos/01-fundamentos-reactjs/src/components/Post.module.css):

~~~css
.commentForm button[type=submit]:not(:disabled):hover {
  background: var(--green-300);
}

.commentForm button[type=submit]:disabled { 
  opacity: 0.5;
  cursor: not-allowed;
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)