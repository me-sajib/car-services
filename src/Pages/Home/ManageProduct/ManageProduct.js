import React from "react";
import useServices from "../../../Hooks/UseServices";

const ManageProduct = () => {
  const [service, setService] = useServices();
  const deleteService = (id) => {
    const sure = window.confirm("are you sure?");
    // if user is ok to data delete then data delete
    if (sure) {
      fetch(`http://localhost:5000/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = service.filter((item) => item._id !== id);
          setService(remaining);
        });
    }
  };
  return (
    <div className="text-center">
      <h1>Any action to products</h1>
      {service.map((sr) => (
        <div key={sr._id}>
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
