// src/components/SearchBar.jsx
import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

function SearchBar({ placeholder }) {
  return (
    <div className={styles.search}>
      <Search size={16} />
      <input className={styles.input} placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;