import { Route, Routes } from "react-router-dom";
import Nav from "./Pages/Shared/Header/Nav";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
