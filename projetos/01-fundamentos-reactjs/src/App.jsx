import { Post } from "./Post";

export function App() {
  return (
    <div>
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