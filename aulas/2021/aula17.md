<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando React</h1>
<h2>Aula 17: Fast Refresh no Webpack.</h2>
</div>

- é uma funcionalidade que pode ser adicionada à parte na integração entre React e webpack, e torna o ambiente de desenvolvimento mais fluido.
- o [Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin) permite alterar o código da aplicação e salvá-lo, sendo refletido no navegador, porém sem alterar o estado dos componentes.
  - exemplo: se for uma aplicação com um carrinho de compras, e não utilizarmos o fast refresh, a cada alteração no códigoo carrinho seria zerado.
  - com o fast refresh, a alteração será implementada, porém sem resetar o carrinho, por exemplo.

### Configurando:

- instalar `yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh`.

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)