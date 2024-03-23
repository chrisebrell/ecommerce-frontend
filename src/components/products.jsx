import { useContext } from "react";
import { ProductsContext } from "../context/products.context";
import ProductCard from "./productCard";
import "../styles/products.style.scss";
import { useState, useEffect } from "react";

const Products = () => {
  const products = useContext(ProductsContext);

  const [data, setData] = useState([]);
  // initial loading of products
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const url = process.env.REACT_APP_API_BASE_URL
        const url =
          process.env.REACT_APP_API_BASE_URL ||
          `http://localhost:3000/api/products`;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        if (data.length) {
          setData(data);
          console.log(data);
        }
      } catch (error) {
        console.error("failed", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
