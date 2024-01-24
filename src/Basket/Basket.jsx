import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Basket.module.css";
// import basketIcon from "../assets/img/free-icon-shopping-cart-711897.png";
import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";
import { fetchCart } from "../features/cartSlice";

const Basket = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartSlice.items);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  return (
    <div className={styles.basket_block}>
      <Link to="/cart">
        <div className={styles.cart}>
          {cartItems.map((item) => (
            <BasketItem key={item.id} item={item} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Basket;
