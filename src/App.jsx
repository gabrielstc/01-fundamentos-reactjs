import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Siderbar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: { avatarUrl: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://scontent.fgel2-1.fna.fbcdn.net/v/t1.6435-9/33944141_1873258072704642_6310871631589801984_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFOW46fhQ_FmsmwMS8Gh_08Oapxe_rp-uk5qnF7-un66eptFLUQgAw-jdkPgE06BwU_iHin72eYQQ0F-KM2T9eQ&_nc_ohc=CetXC_kFaBUAX-k3bOq&_nc_ht=scontent.fgel2-1.fna&oh=00_AfCShH-RiovF6nOHRj10gxhJIBLaJn9qRGRvvJf61H3Q7w&oe=63A6F4E6",
      name: "Gabriel Strieder",
      role: "Full Stack Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-28 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO na Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-27 20:00:00"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
