import { CartContext } from "@/contexts/CartContext";
import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";

export default function Tile({ _id, title, price, images }) {
  const { addProduct } = useContext(CartContext);

  return (
    <div className="h-[230px] w-[180px] bg-gray-500 rounded-sm p-[5px] flex flex-col justify-between">
      <Link href={"/product/" + _id}>
        <div className="bg-white rounded-sm p-[5px] h-[160px] w-[170px] flex justify-center items-center overflow-hidden">
          <img
            className="w-full h-full object-contain align-center hover:scale-200 transition-transform duration-300 ease-in-out"
            src={images[0]}
            alt="new product"
          />
        </div>

        {/*break*/}
      </Link>
      <Link href={"/product/" + _id}>
        <div className=" text-white pl-1 pr-1">
          <h2 className="overflow text-[10px]">{title}</h2>
        </div>
      </Link>
      <div>
        <div className="flex  p-[5px] items-center justify-between text-white pl-1 pr-1">
          <Link href={"/product/" + _id} className="text-[13px] font-bold">
            $
            {new Intl.NumberFormat("en-US", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(parseFloat(price))}
          </Link>
          <Link href={"#"}>
            <button
              onClick={() => addProduct(_id)}
              className="inline-flex items-center justify-center text-white bg-transparent hover:bg-white hover:text-black font-medium rounded-sm text-[8px] border px-1 py-0.5 transition-colors space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 pr-[3px]"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
