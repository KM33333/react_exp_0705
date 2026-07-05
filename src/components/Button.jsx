// src/components/Button.jsx
import styles from "./Button.module.css";

function Button({ label, variant = "primary", icon }) {
  return (
    <button className={`${styles.button}${styles[variant]}`}>
      {icon}
      {label}
    </button>
  );
}

export default Button;