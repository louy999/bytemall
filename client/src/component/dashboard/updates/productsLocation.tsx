import axios from "axios";
import { useEffect, useState } from "react";
import env from "../../../env";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
const ProdLocation = () => {
  const [input, setInput] = useState<any>({
    location: "",
  });
  const [active, setActive] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const updateName = async () => {
    setLoading(true);

    try {
      await axios
        .patch(`${env.url}/pro/location`, {
          id: window.location.pathname.slice(10),
          location: input.location,
        })
        .then(() => {
          setActive(<div className="alert">تم تغير الموقع</div>);
          setTimeout(() => {
            setActive("");
          }, 5000);
          setLoading(false);
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
          name="location"
          onChange={handelChange}
          placeholder="موقع  المنتج"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={updateName}
        >
          {loading ? (
            <FontAwesomeIcon icon={faRotateRight} className="btn btn-danger" />
          ) : (
            "تعديل"
          )}
        </button>
        {active}
      </div>
    </>
  );
};

export default ProdLocation;
