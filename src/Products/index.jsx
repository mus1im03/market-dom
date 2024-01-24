import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./products.module.css";
import Product from "./Product";
import { fetchItems } from "../features/itemSlice";

const Products = () => {

  const { itemCategoryId } = useParams();
  
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  
  const items = useSelector((state) =>
  state.items.items.filter((item) => {
    if (!categoryId && !itemCategoryId) return true;
    
    if(itemCategoryId) {
      return item.itemCategoryId === itemCategoryId
    }
    
    return item.categoryId === categoryId;
  })
  );
  
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className={styles.products}>
      {items.map((item) => {
        return (
          <Product
            key={item._id}
            img={`http://localhost:4040${item.img}`}
            name={item.title}
            price={item.price}
            left={item.left}
            id={item._id}
            description={item.description}
            inStok={item.inStok}
          />
        );
      })}
    </div>
  );
};

export default Products;
