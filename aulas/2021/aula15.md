<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando React</h1>
<h2>Aula 15: Estado do Componente.</h2>
</div>

- criado um componente fictício [Counter.jsx](../reactjs/01-github-explorer/src/components/Counter.jsx), para estudar inicialmente o conceito de `Estado do Componente`, que posteriormente será aplicado no projeto.

~~~jsx
export function Counter() {
  return (
    <div>
      <h2>0</h2>
      <button type="button">Increment</button>
    </div>
  );
}
~~~

- o componente acima foi renderizado no [App.jsx](../reactjs/01-github-explorer/src/App.jsx):

~~~jsx
import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return (
    // inserida div para permitir colocar os dois componentes, um abaixo do outro.
    <div>
      <RepositoryList />
      <Counter />
    </div>
    )
}
~~~

### Importante:
- caso não queira utilizar a div (como no exemplo acima, pois pode bagunçar o CSS):
  - é possível usar `Fragment`, uma tag do HTML sem nenhum nome, como ilustrado abaixo.

~~~jsx
export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
    )
}
~~~

### Adicionando funcionalidade a [Counter.jsx](../reactjs/01-github-explorer/src/components/Counter.jsx):

~~~jsx
export function Counter() {
  let counter = 0;

  function increment() {
    counter += 1;
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

- por padrão, o React não monitora as variáveis para verificar alterações em seus valores.
- ele monitora apenas as `variáveis do Estado` e, todas as vezes que estas forem alteradas, o React renderizará e exibirá os valores atualizados.
- logo:

~~~jsx
import { useState } from 'react';
// sempre que a função começar com 'use', chamamos de hook (gancho).

export function Counter() {
  const [counter, setCounter] = useState(0);
  // useState retorna um array: counter[0] (que retorna o valor) e counter[1].
   // portanto, utilizar atribuição via desestruturação para obter o valor.

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

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)