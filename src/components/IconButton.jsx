// src/components/IconButton.jsx
import styles from "./IconButton.module.css";

function IconButton({ icon }) {
  return<button className={styles.iconBtn}>{icon}</button>;
}

export default IconButton;