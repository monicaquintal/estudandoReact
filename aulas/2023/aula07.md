<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 07: CSS Modules.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed", que será desenvolvido durante o estudo dos Fundamentos do React.

## Iniciando a aplicação:

- no React, importamos o CSS apenas nos arquivos JS, nunca no HTML!
- é muito comum trabalharmos com CSS em escopos associados aos Componentes; ou seja, a estilização deve afetar apenas o Componente a que se aplica (conceito de `scoped css`).
- utilizar a ferramenta [CSS Module](https://github.com/css-modules/css-modules).
  - o próprio Vite já traz suporte automático para CSS Modules, não sendo necessário instalar.

## Colocando em prática:

1. Criação do arquivo [Header.jsx](../../projetos/01-fundamentos-reactjs/src/components/Header.jsx).
2. Criação do arquivo [Header.module.css](../../projetos/01-fundamentos-reactjs/src/components/Header.module.css).
  - como queremos que a estilização afete apenas o Header, incluir a extensão .module.css!
  - quando trabalhamos com CSS modules, tentar usar apenas **classes**, evitando ids ou outros seletores.
  - **importante:** 
    - em React não utilizamos class, e sim `className`!
    - a importação é realizada de forma distinta, como exemplificado abaixo.

### [Header.jsx](../../projetos/01-fundamentos-reactjs/src/components/Header.jsx):

~~~jsx
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
~~~

### [Header.module.css](../../projetos/01-fundamentos-reactjs/src/components/Header.module.css):

~~~css
.header {
  background: #333;
  height: 80px;
}
~~~

> outros Componentes poderão receber essa classe header, com estilizações específicas, sem que uma interfira na outra, mesmo com o mesmo nome. Isso ocorre pois o CSS Modules gera automaticamente, para cada classe, um hash/hexadecimal aleatório, para que essa classe seja única para o Componente em que é utilizada!!!

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)