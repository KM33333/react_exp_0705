// src/components/EmptyState.jsx
import { Inbox } from "lucide-react";
import styles from "./EmptyState.module.css";

function EmptyState({ message }) {
  return (
    <div className={styles.empty}>
      <Inbox size={32} />
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;