import axios from "axios";
import { useEffect, useState } from "react";
import env from "../../../env";

const ProdName = () => {
  const [input, setInput] = useState<any>({
    productsName: "",
  });
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [active, setActive] = useState<any>("");
  const updateName = async () => {
    try {
      await axios
        .patch(`${env.url}/pro/name`, {
          id: window.location.pathname.slice(10),
          productsName: input.productsName,
        })
        .then(() => {
          setActive(<div className="alert">تم تغير التوافر</div>);
          setTimeout(() => {
            setActive("");
          }, 5000);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="productsName"
          onChange={handelChange}
          placeholder="اسم المنتج"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={updateName}
        >
          تعديل
        </button>
        {active}
      </div>
    </>
  );
};

export default ProdName;
