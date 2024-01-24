import React from "react";
import Header from "./Header/Header";
import styles from "./App.module.css";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import ProductsList from "./ProductsList/ProductsList";
import BasketItem from "./Basket/BasketItem";
import Basket from "./Basket/Basket";

const App = () => {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/products/:id" element={<ProductsList />} />
        <Route path="/category/:categoryId" element={<Products />} />
        <Route path="/itemcategories/:itemCategoryId" element={<Products />} />
        <Route path="/cart" element={<Basket />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
