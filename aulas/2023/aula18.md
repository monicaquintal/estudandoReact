<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 18: Aplicando responsividade..</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

### Em [App.module.css](../../projetos/01-fundamentos-reactjs/src/App.module.css):

~~~css
@media (max-width: 768px) {
html {
  font-size: 87.5%;
}

  .wrapper {
    grid-template-columns: 1fr;
  }
}
~~~

### O REM é uma unidade relativa ao font size da página: se o usuário aumenta o tamanho da fonte, tudo aumentará!
- alterar o valor em %, não em px (pois px é valor bruto, e queremos mantera responsividade!)

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)