import styles from "./item.module.scss";
import { MdNavigateNext } from "react-icons/md";
function Item(props) {
  return (
    <div className={styles.item}>
      <div className={styles.item_data}>
        <div className={styles.item_type}>Sähkö</div>
        <div className={styles.item_amount}>437,50 €</div>
        <div className={styles.item_date}>20.3.2019</div>
        <div className={styles.item_timestamp}>1.12.2018-28.2.2019</div>
        <div className={styles.item_receiver}>Fortum</div>
        <div className={styles.item_average}>145,83 €/kk</div>
      </div>
      <div className={styles.item_edit}>
        <MdNavigateNext size={28} />
      </div>
    </div>
  );
}

export default Item;
