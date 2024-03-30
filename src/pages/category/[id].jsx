import Header from "./components/Header";
import Main from "./components/main";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import SingleOrder from "./components/SingleOrder";

export default function AccountPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const { data: session } = useSession();
  const [orders, setOrders] = useState([]);
  const [ordersRendered, setOrdersRendered] = useState(true);

  useEffect(() => {
    if (!session) {
      return;
    }
    setOrdersRendered(false);

    axios
      .get("/api/orders")
      .then((response) => {
        setOrders(response.data);
        setOrdersRendered(true);
      })
      .catch((error) => {
        console.error("Failed to fetch orders:", error);
      });
  }, [session]);

  //   console.log(session);
  async function logout() {
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
  }

  async function login() {
    await signIn("google");
  }

  return (
    <Main>
      <Header />
      <div className="min-h-screen py-[30px] bg-gray-700">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="text-white font-semibold text-center text-xl pt-4 ">
            My Account
          </h1>
          <div className="pl-[40px] pr-[40px] grid grid-cols-[1.3fr_0.7fr] gap-[40px] text-white">
            <div className="rounded-sm bg-gray-600 border-gray-500 p-[30px]">
              <div>
                <h2 className="text-white pb-2">Orders</h2>
                {!session ? (
                  <p className="text-center">Log in to see orders.</p>
                ) : ordersRendered ? (
                  orders.length > 0 ? (
                    orders.map((o) => (
                      <SingleOrder key={o.id} {...o} session={session} />
                    ))
                  ) : (
                    <p className="text-center">No orders found.</p>
                  )
                ) : (
                  <p className="text-center">Loading orders...</p>
                )}
              </div>
            </div>
            <div className="bg-gray-600 p-6 rounded-lg border border-gray-500 flex flex-col items-center">
              {session && (
                <>
                  {/* Display user's name if logged in */}
                  <div className="mb-4 text-xl">{session.user.name}</div>
                  <button onClick={logout} className="btn-primary">
                    Logout
                  </button>
                </>
              )}
              {!session && (
                <button
                  className="mt-4 w-[50%] text-white bg-blue-500 hover:bg-blue-700 font-semibold rounded-md text-sm py-2 focus:outline-none transition-colors duration-150 ease-in-out"
                  onClick={login}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
