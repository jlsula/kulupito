import styles from "./app.module.scss";
import Items from "../items/";
import Header from "../header";
import Content from "../content";
import Menu from "../menu";
import { ButtonAppContainer } from "../../shared/uibuttons";

function App() {
  return (
    <ButtonAppContainer>
      <div className={styles.app}>
        <Header />
        <Content>
          <Items />
        </Content>
        <Menu />
      </div>
    </ButtonAppContainer>
  );
}

export default App;
