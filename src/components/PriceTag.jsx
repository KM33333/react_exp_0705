// src/components/PriceTag.jsx
import styles from "./PriceTag.module.css";

function PriceTag({ price }) {
  return<span className={styles.price}>¥{price.toLocaleString()}</span>;
}

export default PriceTag;