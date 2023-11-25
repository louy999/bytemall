import axios from "axios";
import { useEffect, useState } from "react";
import env from "../../../env";

const ProdPrice = () => {
  const [input, setInput] = useState<any>({
    price: "",
  });
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [active, setActive] = useState<any>("");
  const updatePrice = async () => {
    try {
      await axios
        .patch(`${env.url}/pro/price`, {
          id: window.location.pathname.slice(10),
          price: input.price,
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
          type="number"
          className="form-control"
          onChange={handelChange}
          name="price"
          placeholder="سعر المنتج"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={updatePrice}
        >
          تعديل
        </button>
        {active}
      </div>
    </>
  );
};

export default ProdPrice;
