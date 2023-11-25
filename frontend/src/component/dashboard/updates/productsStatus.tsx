import axios from "axios";
import { useEffect, useState } from "react";
import env from "../../../env";

const ProdStatus = () => {
  const [input, setInput] = useState<any>({
    status: "",
  });
  const [active, setActive] = useState<any>("");
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updatePrice = async () => {
    try {
      await axios
        .patch(`${env.url}/pro/status`, {
          id: window.location.pathname.slice(10),
          status: input.status,
        })
        .then(() => {
          setActive(<div className="alert">تم تغير الحالة</div>);
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
          onChange={handelChange}
          className="form-select"
          name="status"
          aria-label="Disabled select example"
        >
          <option selected disabled>
            اختار حالة المنتج
          </option>
          <option value="مستعمل">مستعمل</option>
          <option value="مستعمل كجديد">مستعمل كجديد</option>
          <option value="جديد">جديد</option>
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

export default ProdStatus;
