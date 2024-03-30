import Main from "./subComponents/main";

export default function SingleOrder({ session, line_items, createdAt }) {
  // Check for empty line items early to avoid unnecessary layout rendering
  if (!line_items || line_items.length === 0) {
    return (
      <Main>
        <div className="px-8 py-4 bg-gray-400">
          <h1 className="text-xl font-semibold text-gray-800">Your Order</h1>
          <p>No items found in this order.</p>
        </div>
      </Main>
    );
  }

  // Format date outside of return statement for cleaner JSX
  const formattedDate = new Date(createdAt).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Main>
      <div className="px-8 py-4">
        <div className="flex flex-col items-start space-y-4">
          {line_items.map((item, index) => (
            <div key={index} className={`${index > 0 ? "pt-4" : ""}`}>
              {/* Product name and quantity */}
              <p className="text-lg text-gray-200 font-semibold">
                {item.quantity}x {item.price_data.product_data.name}
              </p>
              {/* Date displayed under the product name */}
              <p className="text-sm text-gray-400">Date: {formattedDate}</p>
              {/* Product price */}
              <p className="text-gray-200">
                Price: ${item.price_data.unit_amount / 100}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}
