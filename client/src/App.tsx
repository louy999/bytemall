import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsShows from "./component/productsShows";
// import Navbar from "./component/navbar";
import SpecificProducts from "./component/specificProduct";
import NoURl from "./layout/noUrl";
import LockScreen from "./component/dashboard/lockScreen";
import Dashboard from "./component/dashboard/dashboard";
import BasicModal from "./layout/addProducts";
import DashProdEdit from "./component/dashboard/dashProEdit";
import ErrorPage from "./layout/noUrl";

function App() {
  return (
    <div className="App">
      {/* < /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsShows />} />
        <Route path="/products/:id" element={<SpecificProducts />} />
        {/* <Route path="/dashboard" element={()=>{}} /> */}
        <Route path="/dash/lock" element={<LockScreen />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/dash/new" element={<BasicModal />} />
        <Route path="/dash/pro/:id" element={<DashProdEdit />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
