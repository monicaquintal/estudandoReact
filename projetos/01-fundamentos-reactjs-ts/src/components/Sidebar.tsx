import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />
      
      <div className={styles.profile}>
        <Avatar src="https://scontent.fssz3-1.fna.fbcdn.net/v/t1.18169-9/15665616_1284915764888199_4161337334963949149_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=4Lw0MiGx3DAAX8ye_QR&_nc_ht=scontent.fssz3-1.fna&oh=00_AfAWz5uyRImrZjLJiXLAwb-iNYjJW6KuXbjcP2umPYYdiA&oe=64DED6EE"/>

        <strong>Mônica Quintal</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}