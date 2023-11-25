import { useEffect, useState } from "react";
import axios from "axios";
import env from "../env";
import ProductAvailable from "../layout/productAvailable";
import ProductNotAvailable from "../layout/productNotAvailable";
import Suggests from "../layout/suggests";
import NavHome from "./navHome";
import { Helmet } from "react-helmet-async";

const SpecificProducts = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const getAllProducts = async () => {
    try {
      axios
        .get(`${env.url}/pro/${window.location.pathname.slice(10)}`)
        .then((res) => {
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
        <title>bytemall-المنتج</title>
      </Helmet>
      <NavHome />
      {loading && <p>Loading...</p>}

      <div className="container specificProduct">
        {data === null ? (
          ""
        ) : data?.available ? (
          <ProductAvailable data={data} />
        ) : (
          <ProductNotAvailable data={data} />
        )}
      </div>
      {data === null ? "" : <Suggests data={data} />}
    </>
  );
};

export default SpecificProducts;
