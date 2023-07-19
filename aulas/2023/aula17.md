<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 17: Componente Avatar.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

## No React, há dois grandes momentos em que criamos componentes:
  1. Quando algo se repete várias vezes na tela.
  2. Quando conseguimos remover algo de um componente maior, sem que ele pare de funcionar (tornando o componente maior mais limpo e demais fácil manutenção).

## No projeto:

- criação do componente [Avatar.jsx](../../projetos/01-fundamentos-reactjs/src/components/Avatar.jsx):

~~~jsx
import styles from './Avatar.module.css'

export function Avatar(props) {
  return (
    <img className={styles.avatar} src={props.src} />
  );
}
~~~

- e sua estilização em [Avatar.module.css](../../projetos/01-fundamentos-reactjs/src/components/Avatar.module.css), retirada de [Sidebar.module.css](../../projetos/01-fundamentos-reactjs/src/components/Avatar.module.css):

~~~css
.avatar {
  width: calc(3rem + 12px); /* evita que a imagem seja comprimida */
  height: calc(3rem + 12px); /* evita que a imagem seja comprimida */
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
}
~~~

- assim, sempre que formos inserir um avatar em algum componente, seguir o exemplo abaixo, da [Sidebar](../../projetos/01-fundamentos-reactjs/src/components/Sidebar.jsx):

~~~jsx
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://github.com/monicaquintal.png" 
      />
  );
}
~~~

- feito o mesmo procedimento nos Componentes Post e Comment!

## Observação importante:

- no avatar dos comentários, a estilização é diferente: não há borda.
- portanto, para fazer a diferenciação:
  - criada propriedade `hasBorder`, a atribuída como **false** no Avatar dos comentárioa.
  - no arquivo Avatar.jsx:

~~~jsx
import styles from './Avatar.module.css'

export function Avatar(props) {
  return (
    <img 
      className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={props.src} />
  );
}
~~~

- no arquivo Avatar.css:

~~~css
.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
}

.avatarWithBorder {
  width: calc(3rem + 12px);
  height: calc(3rem + 12px); 
  border-radius: 8px;
  border: 4px solid var(--gray-800);
  outline: 2px solid var(--green-500);
}
~~~

- a partir daí, aqueles que não tiverem borda, devemos informar:

~~~jsx
// caso não tenha borda:
<Avatar hasBorder={false}/>

//caso tenha borda:
<Avatar hasBorder={true}/> //ou
<Avatar hasBorder/>
~~~

## Ou podemos tornar o "hasBorder = true" como default; há duas maneiras:

1. Criando uma constante:

~~~jsx
import styles from './Avatar.module.css'

export function Avatar(props) {
  const hasBorder = props.hasBorder !== false;

  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={props.src} />
  );
}
~~~

2. Usar o `conceito de desestruturação do Javascript`:
- inserir o objeto no lugar das props, definindo quais delas serão buscadas e seus valores default.

~~~jsx
import styles from './Avatar.module.css'

export function Avatar( { hasBorder = true, src }) {

  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} />
  );
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)