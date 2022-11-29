import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
export function Siderbar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />
      <div className={styles.profile}>
        <Avatar src="https://scontent.fgel2-1.fna.fbcdn.net/v/t1.6435-9/33944141_1873258072704642_6310871631589801984_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFOW46fhQ_FmsmwMS8Gh_08Oapxe_rp-uk5qnF7-un66eptFLUQgAw-jdkPgE06BwU_iHin72eYQQ0F-KM2T9eQ&_nc_ohc=CetXC_kFaBUAX-k3bOq&_nc_ht=scontent.fgel2-1.fna&oh=00_AfCShH-RiovF6nOHRj10gxhJIBLaJn9qRGRvvJf61H3Q7w&oe=63A6F4E6" />
        <strong>Gabriel Ten Caten</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
