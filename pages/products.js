import Header from "@/components/Header";
import Main from "@/components/subComponents/main";
import Tile from "@/components/subComponents/tile";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useRouter } from "next/router";

export default function ProductsPage({ products }) {
  const router = useRouter();

  // Function to handle sorting change
  const handleSortChange = (e) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: e.target.value },
    });
  };

  return (
    <Main>
      <Header />
      <div className="px-[30px] min-h-screen bg-gray-400">
        <div className="flex flex-col items-center">
          <div className="text-center flex-1">
            <h1 className="text-gray-800 font-semibold text-center text-xl pt-4 ">
              All Products
            </h1>
          </div>
          <div className="w-full max-w-[1000px] flex justify-between items-center px-4">
            <div className="flex-grow"></div>{" "}
            <select
              onChange={handleSortChange}
              defaultValue={router.query.sort || ""}
              className="appearance-auto ... bg-gray-100 border border-gray-600 text-gray-900 text-sm rounded-lg block w-40 p-1.5"
            >
              <option value="">Sort By</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="flex items-center justify-center">
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
      </div>
    </Main>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();

  // sort query
  const sortCriteria = context.query.sort || "";

  let sort = {};
  switch (sortCriteria) {
    case "price_asc":
      sort = { price: 1 };
      break;
    case "price_desc":
      sort = { price: -1 };
      break;
    case "newest":
      sort = { createdAt: -1 };
      break;
    default:
      break;
  }

  // Fetch products with the determined sort criteria
  const products = await Product.find({}, null, {
    sort: sort, // This line was corrected
  });

  // Return the products as props
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
