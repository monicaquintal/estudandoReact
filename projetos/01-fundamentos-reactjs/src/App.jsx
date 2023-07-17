import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css'
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Mônica" 
            content="Lorem ipsum dolor sit amet consectetur." 
          />
          <Post 
            author="João" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ut tenetur laudantium!" 
          />
        </main>
      </div>
    </div>
  )
}