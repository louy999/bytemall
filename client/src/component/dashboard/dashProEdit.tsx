import axios from "axios";
import env from "../../env";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import EditModal from "../../layout/editeModal";
import NavDash from "./navdash";

const DashProdEdit = () => {
  const navigate = useNavigate();
  // const copy = () => {
  //   navigator.clipboard.writeText("hi");
  // };
  useEffect(() => {
    if (localStorage.items === undefined) {
      navigate("/dash/lock");
    } else {
    }
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [showImg, setShowImg] = useState("");
  const [data, setData] = useState<any>();
  const getSepPro = async (id: number | string) => {
    try {
      await axios
        .get(`${env.url}/pro/${id}`)
        .then((res) => {
          setData(res.data.data);
          setShowImg(`${env.img}/image/${res.data.data.img[0]}`);
        })
        .then(() => {});
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSepPro(window.location.pathname.slice(10));
  }, []);
  const handleClick = (e: any) => {
    setShowImg(e.target.src);
  };

  return (
    <>
      <NavDash />
      <div className="container specificProduct">
        <div className="container-img">
          <img src={showImg} alt="" className="rounded" />

          <div className="con-select">
            {data?.img.map((i: any) => (
              <img
                src={`${env.img}/image/${i}`}
                onClick={handleClick}
                alt=""
                className="rounded"
              />
            ))}
          </div>
        </div>

        <div className="container-details">
          <h1>
            {data?.productsname}({data?.productscode})
          </h1>
          <div className="des">{data?.description}</div>
          <div>السعر : {data?.price} ج</div>

          <div> المكان : {data?.location}</div>
          <div>الحالة : {data?.status}</div>
          <div>متاح : {data?.available ? "موجود" : "متباع"}</div>
          <div>
            {data?.keyword.map((p: any) => (
              <span>{p} </span>
            ))}
          </div>
          <div>للتواصل : 01092042027</div>
          <Button onClick={handleOpen}>تعديل</Button>
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(
                `https://bytemall-louy999.vercel.app/products/${window.location.pathname.slice(
                  10
                )}`
              );
            }}
            className="btn btn-primary"
            id="liveToastBtn"
          >
            الرابط
          </button>
        </div>

        <EditModal open={open} handleClose={handleClose} />
      </div>
    </>
  );
};

export default DashProdEdit;
