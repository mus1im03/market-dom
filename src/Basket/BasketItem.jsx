import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus, removeCart } from "../features/itemSlice";

const BasketItem = ({ item }) => {
  const items = useSelector((state) => state.items.items);

  const dispatch = useDispatch();

  const handleDelete = (id, productId) => {
    dispatch(
      removeCart({
        cartId: id,
        id: productId,
        amount: item.amount,
      })
    );
  };

  const handlePlus = (id) => {
    dispatch(plus(id));
  };

  const handleMinus = (id) => {
    dispatch(minus(id));
  };

  return items.map((prod, index) => {
    if (prod._id === item.productId) {
      return (
        <div key={index}>
          <td>{item.id}</td>
          <td>
            <img src={prod.image} alt="" />
          </td>
          <td>{prod.title}</td>
          <td>{prod.left}</td>
          <td className={styles.td_display}>
            <button onClick={() => handleMinus(prod.id)}>-</button>
            <h5>{item.amount}</h5>
            <button onClick={() => handlePlus(prod.id)}>+</button>
          </td>
          <td></td>
          <td
            className={styles.x}
            onClick={() => handleDelete(item.id, prod.id)}
          >
            ❌
          </td>
        </div>
      );
    }
  });
};

export default BasketItem;
