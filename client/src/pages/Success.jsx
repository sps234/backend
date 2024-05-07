import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { Link } from "react-router-dom";


const Success = () => {
  const location = useLocation();

  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);


  useEffect(() => {
    const createOrder = async () => {
      try {
        // Check if cart and products are defined
        if (!cart) {
          console.log("Cart is empty");
          return;
        }
        else if (!cart.products) {
          console.log("products are missing.");
          return;
        }
        console.log("No Cart is empty or products are missing.")

        const res = await userRequest.post("/orders", {

          userId: currentUser?._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data?.billing_details?.address,

        }
        );

        console.log("order id not set ");
        setOrderId(res.data._id);
        console.log("order id set ");

      } catch (err) {
        console.log("An error occurred while processing your order.");
        console.log(currentUser.accessToken);
        console.log(err);
      }
    };

    // Check if data is defined
    if (data) {
      createOrder();
    } else {
      console.log("No data received.");
    }
  }, [cart, data, currentUser]);





  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>
        <Link to="/">
          Go to Homepage
        </Link>
      </button>
    </div>
  );
};

export default Success;
