import Register from "./Register";
import Login from "./Login";
import Product from "./Product";
import FAQs from "./FAQs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Register />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/products"} element={<Product />} />
      <Route path={"/faqs"} element={<FAQs />} />
    </Routes>
  );
}

export default App;
