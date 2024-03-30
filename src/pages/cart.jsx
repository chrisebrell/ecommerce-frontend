import Main from "./components/main";
import Header from "./components/Header";
import Form from "./components/form";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./contexts/CartContext";
import axios from "axios";

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts, clearCart]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setOnSuccess(true);
      clearCart();
    }
  }, []);

  function addItem(id) {
    addProduct(id);
  }

  function removeItem(id) {
    removeProduct(id);
  }

  async function placeOrder() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      zip,
      address,
      state,
      cartProducts,
    });
    // if (response.data.url) {
    //   window.location = response.data.url;
    // }
    setOnSuccess(true);
    clearCart();
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    total += price;
  }

  useEffect(() => {
    setIsFormValid(name && email && address && city && state && zip);
  }, [name, email, address, city, state, zip]);

  //success message for purchase
  if (onSuccess) {
    return (
      <div>
        <Header />
        <Main>
          <div className="min-h-screen px-[30px] bg-gray-700">
            <div className="max-w-[1000px] mx-auto">
              <div className="py-10 text-gray-300">
                <div className="pl-[40px] pr-[40px] grid grid-cols-1 text-white">
                  <div className="rounded-sm text-center bg-gray-600 border-gray-500 p-[50px]">
                    <h1 className="max-w-[1000px] text-gray-200 text-xl">
                      Thank you for your purchase!
                    </h1>
                    <p>Your order will be shipped shortly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Main>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Main>
        <div className="py-[30px] bg-gray-700">
          <div className="max-w-[1000px] mx-auto">
            <div className="pl-[40px] pr-[40px] grid grid-cols-[1.3fr_0.7fr] gap-[40px] text-white">
              <div className="rounded-sm bg-gray-600 border-gray-500 p-[30px]">
                <div>
                  <h2 className="text-white pb-2">Cart</h2>
                  {!cartProducts?.length && (
                    <div className="text-white">Your cart is empty</div>
                  )}
                  {products?.length > 0 && (
                    //   <table className="w-full">
                    <table className="w-full fixed-layout-table">
                      <thead>
                        <tr className="border-b-[.1px] border-gray-300">
                          {/* <th className="text-gray-300 font-normal text-left text-sm"> */}
                          <th className="text-gray-300 font-normal text-left text-sm product-column">
                            Product
                          </th>
                          {/* <th className="text-gray-300 font-normal text-center text-sm"> */}
                          <th className="text-gray-300 font-normal text-center text-sm quantity-column">
                            Quantity
                          </th>
                          {/* <th className="text-gray-300 font-normal text-right text-sm"> */}
                          <th className="text-gray-300 font-normal text-right text-sm price-column">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr
                            key={product._id}
                            className="border-b-[.1px] border-gray-300"
                          >
                            <td className="inline-flex items-center py-[10px] text-gray-300 font-normal text-left text-sm">
                              <div className="relative bg-gray-100 rounded-sm p-[5px] w-[100px] h-[100px] flex justify-center items-center">
                                <img
                                  className="max-w-[95px] max-h-[95px] object-cover align-center"
                                  src={product.images[0]}
                                  alt=""
                                />
                              </div>
                              <div className="px-[8px] text-wrap">
                                {product.title}
                              </div>
                            </td>
                            <td className="text-gray-300">
                              <div className="flex items-center justify-center">
                                <button
                                  onClick={() => removeItem(product._id)}
                                  className="text-xs bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-1 rounded-l inline-flex items-center justify-center w-[18px] h-[18px]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-3 h-3"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                                <div className="text-gray-300 font-normal text-sm px-[5px]">
                                  {
                                    cartProducts.filter(
                                      (id) => id === product._id
                                    ).length
                                  }
                                </div>
                                <button
                                  onClick={() => addItem(product._id)}
                                  className="text-xs bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-1 rounded-r inline-flex items-center justify-center w-[18px] h-[18px]"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-3 h-3"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </td>

                            <td className="text-gray-300 font-normal text-right text-sm">
                              $
                              {new Intl.NumberFormat("en-US", {
                                style: "decimal",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }).format(
                                parseFloat(
                                  cartProducts.filter(
                                    (id) => id === product._id
                                  ).length * product.price
                                )
                              )}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td></td>
                          <td></td>
                          <td className="text-gray-300 font-normal text-right text-md">
                            <p className="">Total</p>$
                            {new Intl.NumberFormat("en-US", {
                              style: "decimal",
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }).format(parseFloat(total))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
              <div className="rounded-sm bg-gray-600 border-gray-500 p-8">
                {!!cartProducts?.length && (
                  <div className="text-black">
                    <h2 className="text-white text-center text-md mb-4">
                      Personal Information
                    </h2>
                    <Form
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      name="name"
                      onChange={(ev) => setName(ev.target.value)}
                    />
                    <Form
                      type="text"
                      placeholder="Email Address"
                      value={email}
                      name="email"
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <Form
                      type="text"
                      placeholder="Street Address"
                      value={address}
                      name="address"
                      onChange={(ev) => setAddress(ev.target.value)}
                    />
                    <Form
                      type="text"
                      placeholder="City"
                      value={city}
                      name="city"
                      onChange={(ev) => setCity(ev.target.value)}
                    />
                    <div className="flex grid grid-cols-[1.1fr_0.9fr] gap-1">
                      <Form
                        type="text"
                        name="state"
                        placeholder="State"
                        value={state}
                        onChange={(ev) => setState(ev.target.value)}
                      />
                      <Form
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        value={zip}
                        onChange={(ev) => setZip(ev.target.value)}
                      />
                    </div>
                    <h2 className="text-white text-center text-md mt-3 mb-4">
                      Payment Information
                    </h2>
                    <Form
                      type="text"
                      placeholder="Credit Card Number"
                      name="card"
                    />
                    <Form
                      type="text"
                      placeholder="Name on Credit Card"
                      name="cardholder"
                    />
                    <div className="flex grid grid-cols-[1.3fr_0.7fr] gap-1">
                      <Form
                        type="text"
                        name="exp"
                        placeholder="Expiration Date (MM/YY)"
                      />
                      <Form type="text" name="cvc" placeholder="CVC" />
                    </div>

                    <button
                      onClick={placeOrder}
                      disabled={!isFormValid}
                      className="mt-4 w-full text-white bg-blue-500 hover:bg-blue-700 font-semibold rounded-md text-sm py-2 focus:outline-none transition-colors duration-150 ease-in-out"
                    >
                      Place Order
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
