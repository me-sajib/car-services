import React from "react";
import { Link } from "react-router-dom";

const Service = ({ items }) => {
  const { name, description, img } = items;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <Link to="/checkout" className="btn btn-primary">Get Service</Link>
      </div>
    </div>
  );
};

export default Service;
