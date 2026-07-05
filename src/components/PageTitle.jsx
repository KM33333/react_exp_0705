// src/components/PageTitle.jsx
import styles from "./PageTitle.module.css";

function PageTitle({ title, count }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.count}>{count} 件</span>
    </div>
  );
}

export default PageTitle;