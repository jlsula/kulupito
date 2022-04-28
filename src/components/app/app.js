import styles from "./app.module.scss";
import Items from "../items/";
import Header from "../header";
import Content from "../content";
import Menu from "../menu";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Content>
        <Items />
      </Content>
      <Menu />
    </div>
  );
}

export default App;
