import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./products.module.css";
import { addCart } from "../features/itemSlice";

const Product = ({ img, name, price, description, left, inStok, id }) => {

  const dispatch = useDispatch(addCart)

  const hanldeAdd = () => {
    dispatch(addCart(id));
  };


  return (
    <div className={styles.product}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src={img} alt="photo" />
        </div>
        <div className={styles.info_block}>
          <div className={styles.price}>
            <span>{price} ₽</span>
          </div>
          <div className={styles.name}>{name}</div>
          <div className={styles.button_block}>
            <a className={styles.button}
              onClick={hanldeAdd}
              // disabled={cartProductsId.length > 0 || !left ? true : false}
            >
              {/* {left === 0 ? "Нет в наличии" : cartProductsId.length > 0 ? "Добавлено в корзину" : "Купить"} */}
              {left === 0 ? "Нет в наличии" : "Купить"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
