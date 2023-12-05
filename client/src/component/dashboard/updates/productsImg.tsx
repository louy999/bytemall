import axios from "axios";
import { useEffect, useState } from "react";
import env from "../../../env";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
const ProdImg = () => {
  const [file, setFile] = useState<any>(null);
  const [showImg, setShowImg] = useState<any>("");

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState<any>([]);
  const [err, setErr] = useState<any>("");
  const handleFileChange = (event: any) => {
    setInput([]);
    setFile(event.target.files[0]);
  };
  const [active, setActive] = useState<any>("");
  const addImg = () => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("image", file);
      axios
        .post(`${env.img}/upload`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          input.push(res.data);
          return setShowImg(
            input.map((i: any) => (
              <img
                src={`${env.img}/image/${i}`}
                alt=""
                className="rounded img"
              />
            ))
          );
        });
    } else {
      setErr("اختار الصورة اولا");
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };
  const updateImg = async () => {
    setLoading(true);
    try {
      await axios
        .patch(`${env.url}/pro/img`, {
          id: window.location.pathname.slice(10),
          img: input,
        })
        .then(() => {
          setActive(<div className="alert des">تم تغير الصورة</div>);
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
      <div className="input-group">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          onChange={handleFileChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
          onClick={addImg}
        >
          اظهار
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={updateImg}
          id="inputGroupFileAddon04"
        >
          {loading ? (
            <FontAwesomeIcon icon={faRotateRight} className="btn btn-danger" />
          ) : (
            "تعديل"
          )}
        </button>
        {active}
      </div>
      <div>{showImg}</div>
      <div>{err}</div>
    </>
  );
};

export default ProdImg;
