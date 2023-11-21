import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchAndProducts from "../../layout/searchAndProducts";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.items === undefined) {
      navigate("/dash/lock");
    } else {
      console.log("no");
    }
  }, []);
  return (
    <>
      <SearchAndProducts />
    </>
  );
};

export default Dashboard;
