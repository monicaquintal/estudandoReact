<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 02: Criando o Projeto. <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="24px"/></h2>
</div>

> [Figma do Projeto](https://www.figma.com/community/file/1127351821076435124).

## Criando o projeto:
- no prompt:
  - `npm create vite@latest`.
  - nomear o projeto (neste caso, [02-ignite-timer](../../projetos/02-ignite-timer/)).
  - selecionar "react" e "typescript".
  - `code .`

## No VS Code:
- limpar os arquivos do src que não serão utilizados, mantendo apenas [App.tsx](../../projetos/02-ignite-timer/src/main.tsx) e [main.tsx](../../projetos/02-ignite-timer/src/main.tsx).
- remover importações dos arquivos (dos arquivos svg, css, etc).
- comando `npm i` no terminal para instalar as dependências.
- alterar o padrão de exportação:

~~~tsx
// Em App.tsx:
export function App() {
  return (
    <h1>Hello World!</h1>
  )
}

// Em main.tsx:
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
~~~

- remover link do favcon no [index.html](../../projetos/02-ignite-timer/index.html), e alterar o title.

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)