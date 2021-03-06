import useServices from "../../../Hooks/UseServices";
import Service from "../Service/Service";

const Services = () => {
  const [service] = useServices();
  return (
    <div className="container">
      <h1 className="text-center py-5" style={{ color: "blue" }}>
        Our Services
      </h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {service.map((item) => (
          <Service key={item._id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
