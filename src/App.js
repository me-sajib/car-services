import { Route, Routes } from "react-router-dom";
import Nav from "./Pages/Shared/Header/Nav";
import Home from "./Pages/Home/Home/Home";
import SignIn from "./Pages/Login/SignIn/SignIn";
import SignUP from "./Pages/Login/SignUp/SignUP";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn/>}/>  
        <Route path="/register" element={<SignUP/>}/>
      </Routes>
    </>
  );
}

export default App;
