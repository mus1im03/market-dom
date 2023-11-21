import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainBaner from "../MainBaner/MainBaner";
import YandexMap from "../Footer/Map";
import Basket from "../Basket/Basket";
import Products from "../Products";
import { useSelector } from "react-redux";

const MainContent = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainBaner />}/>
        <Route path="/geo" element={<YandexMap />}/>
        <Route path="/basket" element={<Basket />}/>
      </Routes>
      
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/category/:categoryId" element={<Products />} />
        <Route path="/itemcategories/:itemCategoryId" element={<Products />} />
      </Routes>
    </>
  );
};

export default MainContent;
