import React from "react";
import useServices from "../../../Hooks/UseServices";

const ManageProduct = () => {
  const [service] = useServices();
  const deleteService = (id) => {
    console.log(id);
  };
  return (
    <div>
      <h1>Any action to products</h1>
      {service.map((sr) => (
        <div>
          <h3 className="text-primary">
            {sr.name}{" "}
            <button
              className="btn btn-danger"
              onClick={() => deleteService(`${sr._id}`)}
            >
              X
            </button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ManageProduct;
