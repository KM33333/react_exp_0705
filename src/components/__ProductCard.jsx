import React from "react";
import { Package, Pencil, UserRoundPen } from "lucide-react";
// moduleと記載したcssは使いたい部品で、読み込む必要があります！必ずです！😊
import styles from "./ProductCard.module.css";

const ProductCard = ({ name, price, stock }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>
        <Package size={18} /> {name}
      </h2>
      <p className={styles.price}>¥{price}</p>
      {stock === 0 ? (
        <p className={styles.bold}>在庫切れ</p>
      ) : (
        <p className={styles.stock}>在庫 {stock}</p>
      )}
      <button className={styles.button}><UserRoundPen size={12} />編集</button>
    </div>
  );
}


//https://lucide.dev/icons/
export default ProductCard;