import axios from "axios";
import { useEffect, useState } from "react";
import env from "../../../env";

const ProdAvil = () => {
  const [input, setInput] = useState<any>({
    available: "",
  });
  const [active, setActive] = useState<any>("");
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const updatePrice = async () => {
    try {
      await axios
        .patch(`${env.url}/pro/available`, {
          id: window.location.pathname.slice(10),
          available: input.available,
        })
        .then(() => {
          setActive(<div className="alert av">تم تغير التوافر</div>);
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
        <select
          className="form-select"
          name="available"
          onChange={handelChange}
          aria-label="Default select example"
        >
          <option selected disabled>
            اختار
          </option>
          <option value="true">موجود</option>
          <option value="false">اتباع</option>
        </select>
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

export default ProdAvil;
