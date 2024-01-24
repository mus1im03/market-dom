import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  fetchCart,
  increaseItemQuantity,
  removeFromCart,
} from "../features/cartSlice";
import styles from "../Basket/Basket.module.css";
import { fetchItems } from "../features/itemSlice";

const BasketItem = ({ item }) => {

  const items = useSelector((state) => state.items.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleDelete = (id, productId) => {
    console.log(id);
    console.log(productId);
    dispatch(
      removeFromCart({
        cartId: id,
        id: productId,
      })
    );
  };

  const handlePlus = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleMinus = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div>
      {items.map((prod, index) => {
        if (prod._id === item.products[0].productId) {
          return (
            <div key={index} className={styles.cart_items}>
              {/* <td>{prod.id}</td> */}
              <td>
                <img src={`http://localhost:4040${prod.img}`} alt="" className={styles.prod_img}/>
              </td>
              <td className={styles.prod_name}>{prod.title}</td>
              <td>{prod.left}</td>
              <td className={styles.td_display}>
                <button onClick={() => handleMinus(prod.id)} className={styles.dec}>-</button>
                <h5>{item.amount}</h5>
                <button onClick={() => handlePlus(prod.id)} className={styles.inc}>+</button>
              </td>
              <td
                className={styles.prod_delete}
                onClick={() => handleDelete(item._id, prod._id)}
              >
                ❌
              </td>
            </div>
          );
        }
      })}
    </div>
  );
};

export default BasketItem;