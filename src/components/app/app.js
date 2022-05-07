import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./app.module.scss";

import Header from "../header";
import Content from "../content";
import Menu from "../menu";
import Items from "../../routes/items";
import Stats from "../../routes/stats";
import Settings from "../../routes/settings";
import { ButtonAppContainer } from "../../shared/uibuttons";

function App() {
  return (
    <ButtonAppContainer>
      <div className={styles.app}>
        <Router>
          <Header />
          <Content>
            <Route exact path="/">
              <Items />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Content>
          <Menu />
        </Router>
      </div>
    </ButtonAppContainer>
  );
}

export default App;
