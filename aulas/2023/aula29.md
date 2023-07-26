<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 29: Fundamentos do TypeScript. <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="24px"/></h2>
</div>

## O que é TypeScript?
- surgiu como um conjunto ferramental baseado na linguagem JS.
- permite adicionar tipagem estática em uma linguagem como JS, que tem tipagem dinâmica.

### E qual a diferença?

1. Javascript:

~~~js
function sumAge(users) {
  const sum = 0;

  for (const user of users) {
    sum += user.age;
  }
  return sum;
}

sumAge('teste');
~~~

2. Typescript:

~~~ts
interface User {
  name: string;
  bio: string;
  age: number;
}

function sumAge(users: User[]) { //ou Array<User>
  const sum = 0;

  for (const user of users) {
    sum += user.age;
  }
  return sum;
}

sumAge([]);
// só permitirá a inserção de um array de usuários
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)