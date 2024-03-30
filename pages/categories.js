import Header from "@/components/Header";
import Main from "@/components/subComponents/main";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Tile from "@/components/subComponents/tile";
import Link from "next/link";

export default function categoriesPage({ parentCategories, categoryProducts }) {
  return (
    <Main>
      <Header />
      <div className="flex flex-col min-h-screen items-center w-full bg-gray-400">
        <h1 className="max-w-[1000px] font-semibold text-gray-800 text-xl pt-4">
          Categories
        </h1>
        <div className="px-[30px] max-w-[1000px] mt-[40px] w-full mx-auto">
          <div className="flex flex-wrap -mx-2">
            {parentCategories.map((c, index) => {
              const products = categoryProducts[c._id];
              const numItems = products.length;

              return (
                <div key={c._id} className="p-2 w-1/2 border-b">
                  <div className="flex flex-col items-center ">
                    <Link
                      href={`/category/${c._id}`}
                      className="text-gray-800 font-semibold text-center text-xl pb-2"
                    >
                      {c.name}
                    </Link>
                    {numItems > 0 ? (
                      <>
                        <div className="rounded-sm bg-gray-300 p-[20px]">
                          <div className="grid grid-cols-2 gap-2 py-2">
                            {products.map((p) => (
                              <span key={p._id}>
                                <Tile {...p} />
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="pt-2 ">
                            <Link
                              className="inline-block bg-gray-700 text-white
                            font-semibold py-1 px-2 rounded-lg hover:bg-gray-700
                            transition-colors duration-300 ease-in-out text-sm
                            my-1"
                              href={`/category/${c._id}`}
                            >
                              See More
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center pb-3">
                        <p className="text-sm rounded-sm bg-gray-300 p-[8px]">
                          We apologize for the inconvenience, but there are
                          currently no products available in this category.
                          Please check back later.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Main>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const categories = await Category.find();
  const parentCategories = categories.filter((c) => !c.prent);
  const categoryProducts = {};

  for (const parentCategory of parentCategories) {
    const parentCategoryId = parentCategory._id.toString();

    const childCategoryIds = categories
      .filter((c) => c?.parent?.toString() === parentCategoryId)
      .map((c) => c._id.toString());

    const categoryIds = [parentCategory, ...childCategoryIds];

    const products = await Product.find({ category: categoryIds }, null, {
      limit: 2,
      sort: { _id: -1 },
    });
    categoryProducts[parentCategory._id] = products;
  }

  return {
    props: {
      parentCategories: JSON.parse(JSON.stringify(parentCategories)),
      categoryProducts: JSON.parse(JSON.stringify(categoryProducts)),
    },
  };
}
