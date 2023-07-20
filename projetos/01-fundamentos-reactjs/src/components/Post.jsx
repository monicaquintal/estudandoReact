import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src="https://github.com/monicaquintal.png" 
          />
          <div className={styles.authorInfo}>
            <strong>Mônica Quintal</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="16 de julho às 23:30" dateTime="2023-07-16 23:30:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário"
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}