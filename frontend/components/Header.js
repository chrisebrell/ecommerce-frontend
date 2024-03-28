import Link from "next/link";
import Main from "./global/main";

export default function Header() {
  return (
    <Main>
      <header className="px-[30px] bg-gray-800">
        <div className="py-[20px] flex justify-between">
          <Link href={"/"}>
            <div className="text-white flex items-center">Store</div>
          </Link>
          <nav>
            <div className=" text-white flex gap-[15px]">
              <Link className="cursor-pointer hover:text-white" href={"/"}>
                Home
              </Link>
              <Link className="cursor-pointer hover:text-white" href={"/"}>
                All Products
              </Link>
              <Link className="cursor-pointer hover:text-white" href={"/"}>
                Categories
              </Link>
              <Link className="cursor-pointer hover:text-white" href={"/"}>
                Account
              </Link>
              <Link className="cursor-pointer hover:text-white" href={"/cart"}>
                Cart (0)
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </Main>
  );
}
