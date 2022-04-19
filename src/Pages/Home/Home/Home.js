import React from "react";
import Footer from "../../Shared/Footer/Footer";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <PageTitle title={"Home - Car service"} />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
