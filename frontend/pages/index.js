import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ featuredProduct, newProducts }) {
  // console.log({ newProducts });
  //console.log({featuredProduct})
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts product={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "66021b458146452b3af8cec9";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 60,
  });
  return {
    //("[object Object]") cannot be serialized as JSON, stringify to JSON, then parse back into Object ID
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
