import Header from "@/src/components/Header";
import Main from "@/src/components/main";
import { mongooseConnect } from "./lib/mongoose";
import { Product } from "./models/Product";
import { Link } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import { useContext } from "react";

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <>
      <Header />
      <Main>
        <div className="min-h-screen py-[30px] bg-gray-700">
          <div className="flex flex-col items-center">
            <div className="max-w-[1000px] w-full">
              <div className="grid grid-cols-[1fr_1fr] pl-[40px] pr-[40px] gap-2">
                <div className="rounded-sm bg-white border-gray-500 p-8">
                  <span>
                    <img src={product.images[0]} alt={""} />
                  </span>
                </div>

                <div className="rounded-sm bg-gray-600 border-gray-500 p-8">
                  <h1 className="text-2xl font-bold text-white mb-4">
                    {product.title}
                  </h1>
                  <p className="text-md text-gray-200 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg text-blue-200 font-semibold">
                      $
                      {new Intl.NumberFormat("en-US", {
                        style: "decimal",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }).format(parseFloat(product.price))}
                    </div>
                    <Link
                      onClick={() => addProduct(product._id)}
                      href={"#"}
                      type="button"
                      className="inline-flex items-center justify-center text-white bg-blue-500 border-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 focus:outline-none transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 mr-2"
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
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
