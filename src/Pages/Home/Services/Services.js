import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-center py-5" style={{ color: "blue" }}>
        Our Services
      </h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {service.map((item) => (
          <Service key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
