import Link from "next/link";
import Main from "./subComponents/main";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  return (
    <Main>
      {/* Adjusted padding, text size, and background color for a fresher look */}
      <div className="px-6 py-4 text-lg bg-blue-900 text-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Brand name styling */}
            <Link
              className="text-white text-xl font-semibold hover:text-gray-300 transition duration-300"
              href="/"
            >
              Simply Shopping
            </Link>
            <nav>
              <div className="flex gap-4">
                {/* Navigation links with updated hover effect and spacing */}
                <Link
                  className="hover:text-blue-300 transition duration-300"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="hover:text-blue-300 transition duration-300"
                  href="/products"
                >
                  Products
                </Link>
                <Link
                  className="hover:text-blue-300 transition duration-300"
                  href="/categories"
                >
                  Categories
                </Link>
                <Link
                  className="hover:text-blue-300 transition duration-300"
                  href="/account"
                >
                  Account
                </Link>
                {/* Cart icon and counter with improved visibility */}
                <Link
                  className="flex items-center gap-2 hover:text-blue-300 transition duration-300"
                  href="/cart"
                >
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    <span className="absolute top-[-5px] right-[-7px] bg-red-500 text-white rounded-full text-xs px-[5px] py-[0.5px]">
                      {cartProducts.length}
                    </span>
                  </div>
                  Cart
                </Link>
                {/* Search icon */}
                <Link
                  className="text-white hover:text-blue-300 transition duration-300"
                  href="/search"
                >
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
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Main>
  );
}
