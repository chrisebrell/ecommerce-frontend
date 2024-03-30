import { Link } from "react-router-dom";
import Main from "./main";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  if (!product) {
    return (
      <Main>
        <div className="px-[30px] bg-gray-600">
          <div>
            <h1 className="max-w-[1000px] text-gray-200 text-xl pt-4">
              Featured product is currently unavailable
            </h1>
            <p>Please try again later!</p>
          </div>
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <div className="py-[30px] bg-gray-700">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-[0.8fr_1.2fr] gap-1">
              <div className="flex flex-col justify-center items-center">
                <div className="relative">
                  {" "}
                  {/* Common parent with position relative */}
                  <img
                    className="max-w-[100%] max-h-[200px]"
                    src={product.images[0]}
                    alt="Featured Product"
                  />
                  <div className="absolute top-[-12px] left-[-36px] overflow-hidden">
                    {" "}
                    {/* Position the tag */}
                    <div className="text-sm rounded-lg bg-gray-400 text-gray-200 px-[8px] py-[3px]">
                      Featured
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col justify-center items-start h-full">
                <h1 className="text-gray-200 text-xl pb-1">{product.title}</h1>
                <p className="text-gray-400 text-[.8rem]">
                  {product.description}
                </p>
                <div className="pt-3 flex gap-3">
                  <Link
                    href={"/product/" + product._id}
                    type="button"
                    className="text-white bg-transparent border border-white hover:bg-white hover:text-black font-medium rounded-sm text-[10px] px-1.5 py-1 transition-colors"
                  >
                    Read More
                  </Link>
                  <Link
                    onClick={addFeaturedToCart}
                    href={"/"}
                    type="button"
                    className="inline-flex items-center text-white bg-blue-500 border-blue-500 hover:bg-blue-700 font-medium rounded-sm text-[10px] px-1.5 py-1 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 mr-1 -ml-0.5"
                    >
                      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
