<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 03: Bundlers & Compilers.</h2>
</div>

- nem sempre os browsers suportam a versão mais atualizada do JS que estamos utilizando.
- por isso, foram criadas várias ferramentas para que possamos converter o código para versões específicas do JS que rodem em ambientes específicos.

## Bundlers e Compilers:

### Compilers:
- são compiladores de código.
- ferramentas que convertem o código de um formato para outro (sintaxe).
- exemplo: [Babel](https://babeljs.io/).

### Bundlers:
- ferramentas que convertem todos os arquivos JS de uma aplicação para um arquivo JS único - bundle (pois navegadores não tinham a capacidade de importar/exportar diversos arquivos js de uma aplicação).
- exemplo: [Webpack](https://webpack.js.org/).

## Atualmente...
- site [Can I use](https://caniuse.com/) permite verificar que sintaxe os browsers suportam.
  - a grande maioria dos browsers suportam importação e importação de modules, ou seja, de arquivos javascript.
  - ou seja, ***não há mais necessidade de utilização do webpack***!

### As bibliotecas mais famosas atualmente são o [Vite](https://vitejs.dev/) e o [Snowpack](https://www.snowpack.dev/)!
- `Vite`: 
  - utiliza por padrão os ECMA Script Modules nativos!
    - ou seja, não é necessário bundle.
  - faz o processo de compilação automaticamente.
    - ou seja, também não precisa do Babel!
  - é o mais utizado pela comunidade, incusive neste curso.

- `Snowpack`: muito parecido com o Vite, menos popular.

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)