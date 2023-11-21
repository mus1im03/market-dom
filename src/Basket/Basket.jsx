import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Basket.module.css";
import basketIcon from "../assets/img/free-icon-shopping-cart-711897.png";
import BasketItem from "./BasketItem";

const Basket = () => {
  const [opened, setOpened] = useState(false);

  const handleBasketOpen = () => setOpened(true);
  const handleBasketClose = () => setOpened(false);

  const cartItem = useSelector((state) => state.cartItems)

  return (
    <div className={styles.basket_block}>
      <div className={styles.text_img_block}>
      <img src={basketIcon} alt="icon" onClick={handleBasketOpen} className={styles.basket_icon}/>
      <p className={styles.basket_text}>Корзина</p>
      </div>
      <span>{cartItem > 0 && cartItem}</span>
      {opened && 
        <div>
          {cartItem.map((item) => {
            return <BasketItem key={item.id} item={item} />
          })}
        </div>
      }
    </div>
  );
};

export default Basket;
