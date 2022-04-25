import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    async function getOrder() {
      const uri = `http://localhost:5000/order?email=${user.email}`;
      try {
        const { data } = await axios.get(uri, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setOrder(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOrder();
  }, [order]);
  return (
    <div className="container">
      <h1>Your Order :{order.length}</h1>
    </div>
  );
};

export default Order;
