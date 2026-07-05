// src/components/CategoryTag.jsx
import styles from "./CategoryTag.module.css";

function CategoryTag({ label }) {
  return<span className={styles.tag}>{label}</span>;
}

export default CategoryTag;