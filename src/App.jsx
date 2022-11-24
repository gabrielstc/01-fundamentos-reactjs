import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Siderbar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          <Post
            author="Gabriel Strieder"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ullam perspiciatis fuga in sapiente, ex quaerat cumque ab, amet impedit repellendus deleniti optio, voluptatibus eaque. Aperiam, sed. Voluptatum, ullam iste."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
