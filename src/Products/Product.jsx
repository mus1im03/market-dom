import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./products.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const Product = ({ img, name, price, description, left, inStok, id }) => {

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({ 
      products: [{ productId: id, amount: "1" }],
      totalCash: "2000"
    }))
    .then((result) => {
      console.log('Item added to cart:', result);
    })
    .catch((error) => {
      console.error('Error adding item to cart:', error);
    });
  }

  return (
    <motion.div
      // className={styles.product}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
    >
      <div className={styles.inner}>
        <Link to={`/products/${id}`}>
          <div className={styles.image}>
            <img src={img} alt="photo" />
          </div>
        </Link>
        <div className={styles.info_block}>
          <div className={styles.price}>
            <span>{price} ₽</span>
          </div>
          <div className={styles.name}>{name}</div>
          <div className={styles.button_block}>
            <button
              className={styles.button}
              onClick={handleAdd}
              // disabled={cartProductsId.length > 0 || !left ? true : false}
            >
              {/* {left === 0 ? "Нет в наличии" : cartProductsId.length > 0 ? "Добавлено в корзину" : "Купить"} */}
              {left === 0 ? "Нет в наличии" : "Купить"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
