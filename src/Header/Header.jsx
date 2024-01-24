import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Header.module.css";
import logo from "../assets/img/stroy-logo.png";
import Basket from "../Basket/Basket";
import { fetchItems } from "../features/itemSlice";
import logo2 from "../assets/img/market-dom2.png";
import basketIcon from "../assets/img/free-icon-shopping-cart-711897.png";

const Header = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items.items);
  const token = useSelector((state) => state.application.token);
  // const cartItems = useSelector((state) => state.cartSlice.items);

  const [value, setValue] = useState("");

  const filtered = items.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });

  // useEffect(() => {
  //   dispatch(fetchItems());
  // }, []);

  return (
    <>
      <header>
        <div className={styles.header_container}>
          <div className={styles.header_nav}>
            <Sidebar />
            <Link to="/">
              <img src={logo} alt="Logo" className={styles.logo} />
            </Link>
          </div>
          <div className={styles.search_catalog}>
            <input
              type="text"
              className={styles.search_catalog_input}
              placeholder="Я ищу..."
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className={styles.nav_bar}>
            <Link to="/cart">
              <div className={styles.text_img_block}>
                <img
                  src={basketIcon}
                  alt="icon"
                  className={styles.basket_icon}
                />
                <p className={styles.basket_text}>Корзина</p>
              </div>
              {/* <span className={styles.items_length}>{cartItems.length > 0 && cartItems.length}</span> */}
            </Link>
          </div>
        </div>
      </header>
      <ul className={styles.item_list}>
        {value &&
          filtered.map((item) => (
            <Link
              to={`/products/${item._id}`}
              key={item._id}
              className={styles.link}
            >
              <span className={styles.lupa}></span>
              <li className={styles.item_li}>{item.title}</li>
            </Link>
          ))}
      </ul>
    </>
  );
};

export default Header;
