import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchItemCategories } from "../features/categorySlice";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import "./Sidebar.css";

const Sidebar = () => {
  const [seeCategories, setSeeCategories] = useState(false);
  const [seeItems, setSeeItems] = useState(false);
  const [id, setId] = useState("");

  const categories = useSelector((state) => state.categories.categories);
  const itemCategories = useSelector(
    (state) => state.categories.itemCategories
  );

  const dispatch = useDispatch();

  const handleCategories = () => {
    setSeeCategories(!seeCategories);
  };

  const handleItems = (id) => {
    setSeeItems(true);
    setId(id);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchItemCategories());
  }, [dispatch]);

  return (
    <>
      <div className={styles.sidebar_block}>
        <button
          className={styles.burger_menu}
          onClick={() => handleCategories()}
        >
          <span className={styles.burger_line}></span>
        </button>
      </div>
      {/* Кнопка категории ^ */}

      {/* Категории */}
      <CSSTransition
        in={seeCategories}
        timeout={300}
        classNames="categories"
        unmountOnExit
      >
        <div className={styles.category_menu} onMouseLeave={() => setSeeItems(false)}>
          <button
            onClick={() => handleCategories(false)}
            className={styles.close_btn}
          >
            x
          </button>
          <div className={styles.first_category}>
            <ul className="category-list">
              {categories.map((category) => {
                return (
                  <li onClick={() => setSeeCategories(false)} onMouseOver={() => handleItems(category._id)}>
                    <Link
                      to={`/category/${category._id}`}
                      className="item first_item"
                    >
                      {category.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {seeItems && (
            <ul className={styles.second_category}>
              {itemCategories.map((itemCategory) => {
                if (itemCategory.categoryId === id) {
                  return (
                    <li onClick={() => setSeeCategories(false)}>
                      <Link
                        to={`/itemcategories/${itemCategory._id}`}
                        className="item second_item"
                      >
                        {itemCategory.title}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          )}
        </div>
      </CSSTransition>
    </>
  );
};

export default Sidebar;
