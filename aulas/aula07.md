<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h2>Estudando ReactJS</h2>
<p>Rocketseat</p>
</div>

<div align="center">
<h2>Aula 07: Webpack Dev Server.</h2>
</div>

- utilizar a funcionalidade dev-server, dentro do webpack: `yarn webpack-dev-server -D`, e executar `yarn webpack`.
- na configuração do webpack, incluir: 

~~~javascript
devServer: {
  contentBase: path.resolve(__dirname, 'public'),
}
~~~

- e executar: `yarn webpack serve`.

> Com isso, caso façamos alterações em [App.js](../reactjs/01-github-explorer/src/App.jsx), automaticamente será atuaizado em http://localhost:8080/, gerando o bundle sem a necessidade de atualizar o webpack todas as vezes!

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)