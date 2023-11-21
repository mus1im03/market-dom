import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./products.module.css";
import Product from "./Product";
import { fetchItems } from "../features/itemSlice";

const Products = () => {

  const { itemCategoryId } = useParams(); // получаем id из роута
  const { categoryId } = useParams(); // получаем id из роута

  console.log("itemCategoryId", itemCategoryId, "categoryId", categoryId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const items = useSelector((state) =>
    state.items.items.filter((item) => {
      if (!categoryId && !itemCategoryId) return true;

      if(itemCategoryId) {
        return item.itemCategoryId === itemCategoryId
      }

      return item.categoryId === categoryId;
    })
  );

  console.log(items);

  return (
    <div className={styles.products}>
      {items.map((item) => {
        console.log(item);
        return (
          <Product
            key={item._id}
            img={`http://localhost:4040${item.img}`}
            name={item.title}
            price={item.price}
            left={item.left}
            id={item.id}
            description={item.description}
            inStok={item.inStok}
          />
        );
        
      })}
    </div>
  );
};

export default Products;
