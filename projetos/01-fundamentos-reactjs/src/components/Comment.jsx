import styles from './Comment.module.css';
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img 
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
        alt="" 
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header> 
            <div className={styles.authorAndTime}>
              <strong>Jane Doe</strong>
              <time title="18 de julho às 23:30" dateTime="2023-07-16 23:30:00">Há cerca de 1 hora.</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom, parabéns! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}