import axios from "axios";
import { useEffect, useState } from "react";
import env from "../../../env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const ProdKeyword = () => {
  const [input, setInput] = useState<any>({
    keyword: "",
  });

  const [loading, setLoading] = useState(false);

  const [active, setActive] = useState<any>("");
  const handelChange = (e: any) => {
    if (e.target.name === "keyword") {
      // If the target is the keyword, split the value into an array
      setInput((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value.split(" "),
      }));
      console.log(input.status);
    } else {
      // Otherwise, update the state normally
      setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  const updatePrice = async () => {
    setLoading(true);

    try {
      await axios
        .patch(`${env.url}/pro/keyword`, {
          id: window.location.pathname.slice(10),
          keyword: input.keyword,
        })
        .then(() => {
          setActive(<div className="alert">تم تغير كلمات</div>);
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
          name="keyword"
          placeholder="كلمات مفتاحية"
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

export default ProdKeyword;
