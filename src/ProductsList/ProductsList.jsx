import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../features/itemSlice";
import { useParams } from "react-router-dom";
import styles from "./ProductsList.module.css";

const ProductsList = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const product = useSelector((state) =>
    state.items.items.find((item) => item._id === id)
  );

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.product_info}>
        <div className={styles.img_block}>
          <img src={`http://localhost:4040${product?.img}`} alt="product" />
        </div>
        <div className={styles.buy}>
          <div className={styles.title}>
            <span className={styles.prod_name}>{product?.title}</span>
            <span className={styles.prod_art}>Артикул: {product?.articul}</span>
            {product?.inStok ? (
              <span className={styles.prod_true}>В наличии</span>
            ) : (
              <span className={styles.prod_false}>Нет в наличии</span>
            )}
            <span className={styles.prod_price}>{product?.price} Р</span>
          </div>
          <button className={styles.add_basket_button}>Добавить в корзину</button>
        </div>
      </div>
      <div className={styles.description_block}>
        <p className={styles.description_title}>Описание</p>
        <span className={styles.description}>{product?.description}</span>
      </div>
      <div className={styles.comments_block}>
        <p className={styles.comments_title}>Отзывы</p>
      </div>
    </div>
  );
};

export default ProductsList;
