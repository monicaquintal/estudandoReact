<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 13: Estilizações do Post.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

- continuação do desenvolvimento, arquivos [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx) e [Post.module.css](../../projetos/01-fundamentos-reactjs/src/components/Post.module.css).

### Observações importantes:

~~~css
.post + .post {
  /* estiliza todo post que possuir, antes dele, um outro post! */
}
~~~

~~~css
.post > header {
  /* seleciona apenas a header DENTRO do post */
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)