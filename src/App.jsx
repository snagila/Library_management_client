import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import SignIn from "./pages/signin-signup/SignIn";
import SignUp from "./pages/signin-signup/SignUp";
import Product from "./pages/product/Product";
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />

        {/* private routes */}
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
