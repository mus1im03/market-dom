import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Header.module.css";
import logo from "../assets/img/stroy-logo.png";
import Basket from "../Basket/Basket";

const Header = ({value, onChange}) => {

  const allItems = useSelector((state) => state.items.items);
  const token = useSelector((state) => state.application.token);

  const [textSearch, setTextSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState(allItems);

  const handleSearchChange = (event) => {
    const searchText = event.target.value;
    setTextSearch(searchText);

    const filtered = allItems.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItems(filtered);
  };

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
              value={value}
              onChange={onChange}
              type="text"
              className={styles.search_catalog_input}
              placeholder="Я ищу..."
            />
            <button className={styles.search_catalog_btn}></button>
          </div>
          <div className={styles.nav_bar}>
            <Basket />
          </div>
          {!token ? (
            <>
              <div>
                <Link to="/auth">SignUp</Link>
                <Link to="/login">Login</Link>
              </div>
            </>
          ) : (
            <>
              <Routes>
                <Route path="/" />
                <Route path="/login" element={<Navigate to="/" />} />
              </Routes>
            </>
          )}
        </div>
      </header>

      {/* {filteredItems.map(item => (
          <div key={item._id}>{item.title}</div>
        ))} */}
      
      <Routes>
        <Route path="/auth" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      
        
    </>
  );
};

export default Header;
