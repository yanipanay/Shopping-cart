import "./App.css";

//routes
import { Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(true);
  return (
    <div>
      <NavBar setPage={setPage} />
      {page ? <Products /> : <Cart />}
    </div>
  );
}

export default App;
