import { useEffect, useState } from "react";
import axios from "axios";
import env from "../env";
import ProductAvailable from "../layout/productAvailable";
import ProductNotAvailable from "../layout/productNotAvailable";

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
      {loading && <p>Loading...</p>}
      <div className="container specificProduct">
        {data?.available ? (
          <ProductAvailable data={data} />
        ) : (
          <ProductNotAvailable data={data} />
        )}
      </div>
    </>
  );
};

export default SpecificProducts;
