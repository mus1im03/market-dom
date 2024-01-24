import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainBaner from "../MainBaner/MainBaner";
import YandexMap from "../Footer/Map";
import Basket from "../Basket/Basket";
import Products from "../Products";

const MainContent = () => {
  return (
    <>
      <MainBaner />
      <Products />
    </>
  );
};

export default MainContent;
