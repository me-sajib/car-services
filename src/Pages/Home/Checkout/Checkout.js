import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Checkout = () => {
  const id = useParams().id;
  const [user] = useAuthState(auth);
  const [myService, setMyService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setMyService(data[0]));
  }, []);
  const shipping = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const address = e.target.address.value;
    const email = e.target.email.value;
    const price = myService.price;
    const query = { name, address, email, price };
    axios.post("http://localhost:5000/order", query).then((res) => {
      alert("Order Success");
      e.target.reset();
    });
  };
  return (
    <div className="container">
      <PageTitle title="checkout -car service" />
      <div className="py-2">
        <h1>You want to {myService.name}</h1>
        <p>{myService.description}</p>
        <img src={myService.img} alt="" />
      </div>
      <form onSubmit={shipping} className="w-75 mx-auto">
        <h2 className="my-3">Shipping Address</h2>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            readOnly
            value={user.displayName}
            className="form-control"
            id="name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            readOnly
            value={user.email}
            name="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            type="text"
            name="address"
            className="form-control"
            id="address"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productsPrice" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            readOnly
            value={"$" + myService.price}
            name="price"
            className="form-control"
            id="productsPrice"
          />
        </div>

        <button type="submit" className="btn btn-info">
          CHECKOUT
        </button>
      </form>
    </div>
  );
};

export default Checkout;
