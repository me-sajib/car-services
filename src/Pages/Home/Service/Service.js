import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ items }) => {
  const { _id, name, description, img } = items;
  const navigate = useNavigate();
  const getService = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div onClick={() => getService(`${_id}`)} className="btn btn-primary">
          Get Service
        </div>
      </div>
    </div>
  );
};

export default Service;
