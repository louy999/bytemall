import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import imgTest from "../img/bytemallLoco.png";
import axios from "axios";
import env from "../env";
import Navbar from "./navbar";
interface UserData {
  id?: String;
  productsName: String;
  price: number;
  date: String;
  keyword: String;
  available: boolean;
  img: String;
  location: String;
  status: String;
  productsCode: number;
  description: String;
}
const ProductsShows = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const getAllProducts = async () => {
    try {
      axios.get(`${env.url}/pro`).then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Navbar />
      {loading && <p>Loading...</p>}
      <div className="container productsShows">
        {data?.map((p: any): any =>
          p.available ? (
            <div className="card" key={p.id}>
              <img src={imgTest} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  {p.productsname} ({p.productscode})
                </h5>
                <p className="card-text col-5 text-truncate">{p.description}</p>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {p.price}ج
                </h6>
                <NavLink to={`/products/${p.id}`} className="btn btn-primary">
                  للتفاصيل
                </NavLink>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last Posted 3 mins ago
                </small>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default ProductsShows;
