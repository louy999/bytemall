import axios from "axios";
import { useEffect, useState } from "react";
import env from "../../../env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
const ProdDescription = () => {
  const [input, setInput] = useState<any>({
    description: "",
  });
  const [active, setActive] = useState<any>("");

  const [loading, setLoading] = useState(false);

  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const updatePrice = async () => {
    setLoading(true);

    try {
      await axios
        .patch(`${env.url}/pro/description`, {
          id: window.location.pathname.slice(10),
          description: input.description,
        })
        .then(() => {
          setActive(<div className="alert des">تم تغير الوصف</div>);
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
        <textarea
          className="form-control"
          onChange={handelChange}
          name="description"
          placeholder="وصف المنتج"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={updatePrice}
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

export default ProdDescription;
