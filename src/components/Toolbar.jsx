// src/components/Toolbar.jsx
import styles from "./Toolbar.module.css";

function Toolbar({ children }) {
  return<div className={styles.toolbar}>{children}</div>;
}

export default Toolbar;