<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 03: Configurando ambiente/Criando estrutura do projeto.</h2>
</div>

## Configurando o ambiente

- criação da pasta [reactjs](../reactjs), onde serão armazenados os projetos desenvolvidos.
- criação da pasta do primeiro projeto, [01-github-explorer](../reactjs/01-github-explorer/).
- inicializar o repositório, criando o **package.json**, que são as informações principais do projeto.
  - há algumas formas de criá-lo:
    - `yarn init -y`: usado na aula.
    - OU "npm init -y".
  - quando criado, traz informações do nome, versão, arquivo principal a ser executado e licença.
  - incluiremos as dependências do projeto (códigos de terceiros que iremos inserir no projeto - bibliotecas).
- instalar a primeira biblioteca a ser utilizada: do próprio React!
  - `yarn add react`.

~~~json
{
  "name": "01-github-explorer",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "react": "^18.2.0"
  }
}
~~~

- com isso, são criados os arquivos:
  - node_modules: presente em todos os projetos JS.
    - armazena as dependências que instalamos em nossa aplicação, como React e suas próprias dependências (loose-envify, object assing).
  - package.json: presente em todos os projetos JS.
  - yarn.lock.

- `yarn add react-dom`: 
  - forma de trabalhar com React na web!!! 
  - permite que o React se comunique com a árvore de elementos do HTML!

## Criando a estrutura

- **pasta src** para armazenar o código de nossa aplicação (incluindo o próprio JS).
- **pasta public**, onde ficarão os assets (index.html, ícones, robot.txt).

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)