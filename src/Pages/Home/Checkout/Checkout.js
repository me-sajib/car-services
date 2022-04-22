import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const Checkout = () => {
  const id = useParams().id;
  const [myService, setMyService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setMyService(data[0]));
  }, []);
  return (
    <div className="container">
      <PageTitle title="checkout -car service" />
      <div className="py-2">
        <h1>You want to {myService.name}</h1>
        <p>{myService.description}</p>
        <img src={myService.img} alt="" />
      </div>
      <button className="btn btn-info">CHECKOUT</button>
    </div>
  );
};

export default Checkout;
