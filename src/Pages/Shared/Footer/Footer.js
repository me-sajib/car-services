import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="my-3">
      <p className="text-center">copyright &copy; {date.getFullYear()} </p>
    </footer>
  );
};

export default Footer;
