import { Link } from "react-router-dom";
import styles from "./menu.module.scss";
// Icons
import { MdViewList } from "react-icons/md";
import { MdTimeline } from "react-icons/md";
import { MdSettings } from "react-icons/md";

function Menu() {
  return (
    <div className={styles.menu}>
      <div>
        <Link to="/">
          <MdViewList size={28} />
        </Link>
      </div>
      <div>
        <Link to="/stats">
          <MdTimeline size={28} />
        </Link>
      </div>
      <div>
        <Link to="/settings">
          <MdSettings size={28} />
        </Link>
      </div>
    </div>
  );
}

export default Menu;
