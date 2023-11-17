import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsShows from "./component/productsShows";
// import Navbar from "./component/navbar";
import SpecificProducts from "./component/specificProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsShows />} />
        <Route path="/products/id/" element={<SpecificProducts />} />
        {/* <Route path="*" element={ />} /> */}
      </Routes>
    </div>
  );
}

export default App;
