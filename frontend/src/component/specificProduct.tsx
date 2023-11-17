import { useEffect, useState } from "react";
import axios from "axios";
import env from "../env";
import imgTest from "../img/bytemallLoco.png";
import ProductAvailable from "../layout/productAvailable";
import ProductNotAvailable from "../layout/productNotAvailable";

const SpecificProducts = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const getSpsProduct = async () => {
    try {
      axios
        .get(`${env.url}/pro/${window.location.search.slice(1)}`)
        .then((res) => {
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
    getSpsProduct();
  }, []);
  return (
    // <div className="container specificProduct">
    <>
      {loading && <p>Loading...</p>}
      {data.map((p: any) =>
        p.available ? <ProductAvailable /> : <ProductNotAvailable />
      )}
    </>
  );
};

export default SpecificProducts;
