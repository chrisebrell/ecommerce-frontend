import Header from "./components/Header";
import Main from "./components/main";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Tile from "./components/tile";
import { debounce } from "lodash";

export default function SearchPage({ products: product }) {
  const [phrase, setPhrase] = useState("");
  const [products, setProducts] = useState([]);
  const debouncedSearch = useCallback(debounce(searchProducts, 300), []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Failed to fetch products:", error));
  };

  useEffect(() => {
    if (phrase.length > 0) {
      debouncedSearch(phrase);
    } else {
      //   setProducts([]);
      fetchProducts();
    }
  }, [phrase, debouncedSearch]);

  function searchProducts(phrase) {
    axios
      .get("/api/products?phrase=" + encodeURIComponent(phrase))
      .then((response) => {
        setProducts(response.data);
      });
  }

  return (
    <Main>
      <Header />
      <div className="px-[30px] min-h-screen bg-gray-400">
        <div className="flex flex-col items-center">
          <div className="max-w-[1000px] w-full">
            <div className="flex justify-center pt-5">
              <div className="relative">
                <input
                  autoFocus
                  value={phrase}
                  onChange={(ev) => setPhrase(ev.target.value)}
                  placeholder="Search for products..."
                  className="pl-10 pr-3 py-2 border-2 border-gray-300 bg-white text-sm rounded-lg w-full"
                />
                <div className="absolute top-0 left-0 inline-flex items-center justify-center p-2">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* {products.length} */}
            <div className="flex items-center justify-center">
              {phrase !== "" && products.length == 0 && (
                <h2>No products found under &quot;{phrase}&quot;</h2>
              )}

              <div className="max-w-[1000px] grid grid-cols-[1fr_1fr_1fr_1fr] py-4 gap-[20px]">
                {products?.length > 0 &&
                  products.map((product) => (
                    <div key={product._id} className="overflow-hidden">
                      <Tile {...product} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center py-5">
            <h2>
              {products.length} {products.length === 1 ? "item" : "items"} found
            </h2>
          </div>
        </div>
      </div>
    </Main>
  );
}
