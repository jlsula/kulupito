import styles from "./menu.module.scss";
// Icons
import { MdViewList } from "react-icons/md";
import { MdTimeline } from "react-icons/md";
import { MdSettings } from "react-icons/md";

function Menu() {
  return (
    <div className={styles.menu}>
      <div>
        <MdViewList size={28} />
      </div>
      <div>
        <MdTimeline size={28} />
      </div>
      <div>
        <MdSettings size={28} />
      </div>
    </div>
  );
}

export default Menu;
