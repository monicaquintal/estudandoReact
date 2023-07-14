<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando React</h1>
<h2>Aula 16: A imutabilidade do React.</h2>
</div>

## Conceito da `Imutabilidade`:

- prevê que uma variável nunca deve ter seu valor alterado diretamente; é necessário atribuir um novo valor àquela variável.
- no React, caso desejemos adicionar informações em um array, por exemplo, não podemos apenas fazer um "push": devemos criar um novo array, copiando as informações que já temos e adicionar a informação desejada ao final:

~~~javascript
let usuarios = ['usuario1', 'usuario2']
// utilizando MUTABULIDADE:
usuarios.push('usuario3')
// aplicando conceito de IMUTABILIDADE:
let novoUsuario = [...usuarios, 'usuario3']
~~~

- portanto, no React aplicamos o conceito de imutabilidade, garantindo melhor performance da aplicação.

### No exemplo trabalhado em [Counter.jsx](../reactjs/01-github-explorer/src/components/Counter.jsx):

~~~jsx
import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
~~~

- nesse caso, o setCounter permite setar novos valores a counter, ou seja, não altera o valor, e sim SETA um novo valor, criando uma nova variável (ocupando um espaço diferente da memória).

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)