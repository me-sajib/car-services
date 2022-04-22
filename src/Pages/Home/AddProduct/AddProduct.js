import React from "react";

const AddProduct = () => {
  const userLogin = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    // insert to database
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, description, price, img }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("data inserted successfully", result);
      });
  };
  return (
    <div className="container">
      <h1 className="text-center">Add product</h1>
      <form onSubmit={userLogin} className="w-75 mx-auto">
        <div className="mb-3">
          <label htmlFor="productsName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="productsName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productsDescription" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            className="form-control"
            id="productsDescription"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productsPrice" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            name="price"
            className="form-control"
            id="productsPrice"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productsImage" className="form-label">
            Product Image URL
          </label>
          <input
            type="text"
            name="img"
            className="form-control"
            id="productsImage"
          />
        </div>
        <button className="btn btn-primary">ADD PRODUCT</button>
      </form>
    </div>
  );
};

export default AddProduct;
