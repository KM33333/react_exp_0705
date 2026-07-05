// src/components/Header.jsx
import { Store, Plus } from "lucide-react";
import Button from "./Button";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Store size={22} />
        <span>MyShop 管理画面</span>
      </div>
      <Button label="商品追加" variant="primary" icon={<Plus size={16} />} />
    </header>
  );
}

export default Header;