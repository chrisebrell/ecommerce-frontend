import Header from "@/components/Header";
import Main from "@/components/subComponents/main";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Tile from "@/components/subComponents/tile";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryPage({
  category,
  subCategory,
  products: originalProducts,
}) {
  const [products, setProducts] = useState(originalProducts);
  const defaultSorting = "_id-asc";
  const [filterValues, setFilterValues] = useState(
    category.properties.map((p) => ({
      name: p.name,
      value: "all",
    }))
  );
  const [sort, setSort] = useState(defaultSorting);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [filtersChanged, setFiltersChanged] = useState(false);

  function handleFilterChange(filterName, filterValue) {
    setFilterValues((prev) => {
      return prev.map((p) => ({
        name: p.name,
        value: p.name === filterName ? filterValue : p.value,
      }));
    });
    setFiltersChanged(true);
  }

  useEffect(() => {
    const categoryIds = [
      category._id,
      ...(subCategory?.map((c) => c._id) || []),
    ];
    const params = new URLSearchParams();
    params.set("categories", categoryIds.join(","));
    params.set("sort", sort);
    filterValues.forEach((f) => {
      if (f.value !== "all") {
        params.set(f.name, f.value);
      }
    });
    const url = `/api/products?` + params.toString();
    axios.post(url).then((res) => {
      setProducts(res.data);
      setLoadingProducts(false);
    });
  }, [
    filterValues,
    sort,
    filtersChanged,
    category._id,
    JSON.stringify(subCategory.map((c) => c._id)),
  ]);

  return (
    <Main>
      <Header />
      <div className="min-h-screen px-[30px] bg-gray-400">
        <div className="flex flex-col items-center">
          <div className="text-center w-full max-w-[1000px]">
            <h1 className="text-gray-800 font-semibold text-center text-xl pt-4">
              {category.name}
            </h1>
          </div>

          <div className="w-full max-w-[1000px] grid grid-cols-[0.2fr_1.8fr] gap-4">
            <div className="flex flex-col gap-4 rounded-sm p-[3px]">
              {category.properties.map((p) => (
                <div key={p.name}>
                  <label className="block text-left">{p.name}</label>
                  <select
                    onChange={(ev) =>
                      handleFilterChange(p.name, ev.target.value)
                    }
                    value={filterValues.find((f) => f.name === p.name).value}
                    className="appearance-auto text-center rounded-sm block w-full p-0.5"
                  >
                    <option key="all" value="all">
                      All
                    </option>
                    {p.values
                      .filter((v) => v !== "N/A")
                      .map((v) => (
                        <option key={v.name} value={v}>
                          {v}
                        </option>
                      ))}
                  </select>
                </div>
              ))}
            </div>

            <div>
              <div className="flex flex-col">
                <div className="self-end pb-4">
                  <p>Sort By</p>
                  <select
                    value={sort}
                    onChange={(ev) => {
                      setSort(ev.target.value);
                      // Assuming setFiltersChanged is defined elsewhere or part of your state management
                    }}
                    className="appearance-auto bg-gray-100 border border-gray-600 text-gray-900 text-sm rounded-sm block w-40 p-1.5"
                  >
                    <option value="_id-asc">Default</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="_id-desc">Newest Arrivals</option>
                  </select>
                </div>

                {products?.length > 0 ? (
                  <div className="flex items-center justify-center">
                    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] py-4 gap-[20px]">
                      {products.map((product) => (
                        <div key={product._id} className="overflow-hidden">
                          <Tile {...product} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-10">
                    <p className="text-lg text-gray-800 mb-4">
                      We couldn&apos;t find any products matching your criteria.
                    </p>
                    <p className="text-md text-gray-600 mb-6">
                      Try adjusting your filters or search terms to find what
                      you&apos;re looking for.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}

export async function getServerSideProps(context) {
  const category = await Category.findById(context.query.id);
  const subCategory = await Category.find({ parent: category._id });
  const categoryIds = [category._id, ...subCategory.map((c) => c._id)];
  const products = await Product.find({ category: categoryIds });
  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      subCategory: JSON.parse(JSON.stringify(subCategory)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
