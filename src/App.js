import { Route, Routes } from "react-router-dom";
import Nav from "./Pages/Shared/Header/Nav";
import Home from "./Pages/Home/Home/Home";
import SignIn from "./Pages/Login/SignIn/SignIn";
import SignUP from "./Pages/Login/SignUp/SignUP";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Checkout from "./Pages/Home/Checkout/Checkout";
import AddProduct from "./Pages/Home/AddProduct/AddProduct";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUP />} />
        <Route
          path="/checkout/:id"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/addProduct"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
