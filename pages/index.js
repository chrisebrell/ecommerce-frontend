import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Main from "@/components/subComponents/main";
import { Settings } from "@/models/Setting";

export default function HomePage({ featuredProduct, newProducts }) {
  // console.log({ newProducts });
  //console.log({featuredProduct})
  return (
    <div>
      <Main>
        <Header />
        <Featured product={featuredProduct} />
        <NewProducts product={newProducts} />
      </Main>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    await mongooseConnect();
    const featuredProductSetting = await Settings.findOne({
      name: "featuredProductId",
    });
    // Proceed with your logic only after successful connection
    const featuredProductId = featuredProductSetting.value;
    const featuredProduct = await Product.findById(featuredProductId);
    const newProducts = await Product.find({}, null, {
      sort: { _id: -1 },
      limit: 16,
    });

    return {
      props: {
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts)),
      },
    };
  } catch (error) {
    console.error("Database connection or operation failed", error);
    // Handle the error appropriately
    return {
      props: {},
    };
  }
}
