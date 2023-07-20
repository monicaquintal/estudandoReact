<div align="center">
<a href="https://github.com/monicaquintal" target="_blank"><img align="right" height="100" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /></a>
<h1>Estudando ReactJS</h1>
<h2>Aula 19: Iterando no JSX.</h2>
</div>

> [Figma](https://www.figma.com/community/file/1113573231685349036) do Projeto "Ignite Feed".

## Dando vida à aplicação!

- a princípio, as informações de [Post.jsx](../../projetos/01-fundamentos-reactjs/src/components/Post.jsx) são estáticas: as informações do Post no arquivo [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx) não são exibidas!

- para que isso ocorra, são necessárias algumas informações:

~~~jsx
// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String
~~~

## Iteração:

- consiste na criação uma estrutura de repetição; neste caso, percorrer um Array!
  - não é possível utilizar forEach, pois este não gera retorno (void), não exibindo nada em tela.
  - nesses casos, utilizar o `método map`.
- portanto, no arquivo [App.jsx](../../projetos/01-fundamentos-reactjs/src/App.jsx):

~~~jsx
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/monicaquintal.png',
      name: 'Mônica Quintal',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera! 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare. 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-07-20 00:05:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/oliveiradg.png',
      name: 'João Oliveira',
      role: 'Mobile Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera! 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare. 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-07-18 00:05:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

          {posts.map(posts => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}
~~~

---

[Voltar ao início!](https://github.com/monicaquintal/estudandoReact/)