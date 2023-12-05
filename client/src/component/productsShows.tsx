import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import env from "../env";
import Navbar from "./navbar";
import { Helmet } from "react-helmet-async";

const ProductsShows = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const getAllProducts = async () => {
    try {
      axios.get(`${env.url}/pro`).then((res) => {
        setData(res.data.data);
      });
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>bytemall-المنتجات</title>
      </Helmet>
      <Navbar />
      {loading && <p>Loading...</p>}
      <div className="container productsShows">
        {data?.map((p: any): any =>
          p.available ? (
            <div className="card" key={p.id}>
              <img
                src={`${env.img}/image/${p.img[0]}`}
                className="card-img-top"
                alt="..."
              />
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
              <div className="card-footer">{p.date.slice(0, 10)}</div>
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
