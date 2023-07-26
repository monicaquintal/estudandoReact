import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css'

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
      { type: 'paragraph', content: 'Olá pessoal!'},
      { type: 'paragraph', content: 'Subi mais um projeto no meu portfólio, feito no NLW Return da Rocketseat. O projeto é chamado DoctorCare.'},
      { type: 'link', content: 'john.design/doctorcare' }
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
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}