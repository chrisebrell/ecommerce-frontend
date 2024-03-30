import { Link } from "react-router-dom";
import Main from "./main";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  return (
    <Main>
      <div className="px-[30px] text-l bg-gray-800">
        <div className="max-w-[1000px] mx-auto">
          <div className="py-[20px] flex justify-between">
            <Link href={"/"}>
              <div className="text-white flex items-center">
                Simply Shopping
              </div>
            </Link>
            <nav>
              <div className=" text-white flex gap-[15px]">
                <Link className="cursor-pointer hover:text-white" href={"/"}>
                  Home
                </Link>
                <Link
                  className="cursor-pointer hover:text-white"
                  href={"/products"}
                >
                  Products
                </Link>
                <Link
                  className="cursor-pointer hover:text-white"
                  href={"/categories"}
                >
                  Categories
                </Link>
                <Link
                  className="cursor-pointer hover:text-white"
                  href={"/account"}
                >
                  Account
                </Link>
                <Link
                  className="flex cursor-pointer hover:text-white"
                  href={"/cart"}
                >
                  <div className="inline-flex items-center justify-center gap-[6px]">
                    <div className="relative cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-[18px] h-[18px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                      {/* Overlay the cartProducts.length value */}
                      <span className="absolute top-[-4px] right-[-6px] bg-gray-200 font-bold text-gray-800 rounded-full text-[7px] px-[3.5px] h-[14px] w-[14px] flex items-center justify-center leading-none">
                        {cartProducts.length}
                      </span>
                    </div>
                    Cart
                  </div>
                </Link>
                <div className="">
                  <Link href={"/search"}>
                    <span className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Main>
  );
}
