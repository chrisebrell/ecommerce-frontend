import Main from "./main";
import Tile from "./tile";

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
              Latest Products
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="max-w-[1000px] grid grid-cols-[1fr_1fr_1fr_1fr] py-4 gap-[20px]">
              {product?.length > 0 &&
                product.map((product) => (
                  <div key={product.id} className="overflow">
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
