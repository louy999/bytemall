import axios from "axios";
import env from "../env";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Suggests = (props: any) => {
  const [data, setData] = useState<any>();

  const getData = async () => {
    try {
      const response = await axios.get(`${env.url}/pro`);
      const filteredData = response.data.data.filter(
        (p: any) =>
          p.available &&
          props.data &&
          props.data.keyword &&
          p.keyword[0] === props.data.keyword[0]
      );
      setData(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log();

  return (
    <>
      {data?.length === 0 ? (
        ""
      ) : (
        <>
          <h1>المقترحات</h1>
          <div className="container card-con">
            {data &&
              data.map((p: any) => (
                <div className="card">
                  <img
                    src={`${env.img}/image/${p.img[0]}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {p.productsname} ({p.productscode})
                    </h5>
                    <p className="card-text col-5 text-truncate">
                      {p.description}
                    </p>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {p.price}ج
                    </h6>
                    <NavLink
                      onClick={() =>
                        setTimeout(() => {
                          window.location.reload();
                        }, 100)
                      }
                      to={`/products/${p.id}`}
                      className="btn btn-primary"
                    >
                      للتفاصيل
                    </NavLink>
                  </div>
                  <div className="card-footer">{p.date.slice(0, 10)}</div>
                </div>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default Suggests;
