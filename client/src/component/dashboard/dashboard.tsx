import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchAndProducts from "../../layout/searchAndProducts";
import NavDash from "./navdash";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.items === undefined) {
      navigate("/dash/lock");
    } else {
    }
  }, []);
  return (
    <>
      <NavDash />
      <SearchAndProducts />
    </>
  );
};

export default Dashboard;
