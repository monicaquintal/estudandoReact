<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 28: Entendendo closures no React.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

- `Closure`:
  - é uma função capaz de lembrar-se do seu contexto, mesmo quando executada fora do seu contexto léxico.
  - é a forma de fazer com que as variáveis dentro de uma função sejam privadas e persistentes: podem ser acessadas e modificadas apenas dentro da função, o que ajuda a garantir a integridade dos dados e reduz a probabilidade de erros inesperados.

### Exemplo: 

~~~js
  function handleLikeComment() {
    setLikeCount(likeCount + 1);
    setLikeCount(likeCount + 1);
    setLikeCount(likeCount + 1);
    setLikeCount(likeCount + 1);
    setLikeCount(likeCount + 1);
    console.log(likeCount) // resultará em 0!
  }

// quando executada, continuará resultando em "1", pois as "setLikeCount()" são executadas no mesmo contexto.
~~~

### Como "burlar"?

- solução 1: criação de variável.

~~~js
function handleLikeComment() {
  const newLikeComment = likeCount + 1;
  setLikeCount(newLikeComment);
  setLikeCount(newLikeComment + 1);
}
~~~

- solução 2: atribuir uma função. 

~~~js
function handleLikeComment() {
  setLikeCount((state) => {
    return state + 1
  });
    setLikeCount((state) => {
    return state + 1
  });
}
// permite acessar o valor mais recente (state) do likeCount como um argumento da função!
// resulta em +2.
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)