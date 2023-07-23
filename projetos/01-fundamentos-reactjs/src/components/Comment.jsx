import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from "phosphor-react";

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://images-na.ssl-images-amazon.com/images/S/influencer-profile-image-prod/logo/influencer-637769c7_1649816729678_original._CR0,0,723,723_._FMjpg_.jpeg" 
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header> 
            <div className={styles.authorAndTime}>
              <strong>Jane Doe</strong>
              <time title="18 de julho às 23:30" dateTime="2023-07-16 23:30:00">Há cerca de 1 hora.</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
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