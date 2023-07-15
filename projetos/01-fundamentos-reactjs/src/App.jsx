import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <Post 
        author="Mônica" 
        content="Lorem ipsum dolor sit amet consectetur." 
      />
      
      <Post 
        author="João" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est ut tenetur laudantium!" 
      />
    </div>
  )
}