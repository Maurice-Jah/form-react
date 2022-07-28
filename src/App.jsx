import Register from "./Register";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Register />}></Route>
      <Route path={"/login"} element={<Login />}></Route>
    </Routes>
  );
}

export default App;
