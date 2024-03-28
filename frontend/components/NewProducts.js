import Main from "./global/main";
import Tile from "./global/tile";

export default function NewProducts({ product }) {
  if (!product) {
    return (
      <Main>
        <div className="px-[30px] bg-gray-400">
          <div>
            <h1 className="max-w-[1000px] font-semibold text-gray-800 text-xl pt-4">
              New Products
            </h1>
            <p>Please try again later!</p>
          </div>
        </div>
      </Main>
    );
  }

  return (
    <Main>
      <div className="px-[30px] bg-gray-400">
        <div className="flex flex-col items-center">
          <div className="max-w-[1000px] w-full">
            <h1 className="text-gray-800 font-semibold text-center text-xl pt-4 ">
              New Products
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="max-w-[1000px] grid grid-cols-[1fr_1fr_1fr_1fr] py-4 gap-[20px]">
              {/* <div className="max-w-[1000px] grid lg:grid-cols-[1fr_1fr_1fr_1fr] py-4 md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr] gap-[20px]"> */}
              {/* <div className="max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-[20px] gap-[20px]"> */}
              {product?.length > 0 &&
                product.map((product) => (
                  <div className="overflow">
                    <Tile {...product} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
