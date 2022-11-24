import { Comment } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://scontent.fgel2-1.fna.fbcdn.net/v/t1.6435-9/33944141_1873258072704642_6310871631589801984_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFOW46fhQ_FmsmwMS8Gh_08Oapxe_rp-uk5qnF7-un66eptFLUQgAw-jdkPgE06BwU_iHin72eYQQ0F-KM2T9eQ&_nc_ohc=CetXC_kFaBUAX-k3bOq&_nc_ht=scontent.fgel2-1.fna&oh=00_AfCShH-RiovF6nOHRj10gxhJIBLaJn9qRGRvvJf61H3Q7w&oe=63A6F4E6"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Gabriel Strieder</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title="24 de Novembro às 10:30" dateTime="2022-11-24 10:30:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            <a href="">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
            <a href="">#rocketseat</a>
          </p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
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
