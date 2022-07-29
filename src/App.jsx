import Register from "./Register";
import Login from "./Login";
import Product from "./Product";
import FAQs from "./FAQs";
import Error from "./Error";
import SharedLayout from "./SharedLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<SharedLayout />}>
        <Route index element={<Register />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"products"} element={<Product />} />
        <Route path={"faqs"} element={<FAQs />} />
        <Route path={"*"} element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
