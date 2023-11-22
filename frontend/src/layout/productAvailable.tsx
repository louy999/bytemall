import env from "../env";
import { useState } from "react";

const ProductAvailable = (props: any) => {
  const [showImg, setShowImg] = useState(
    `${env.img}/image/${props.data.img[0]}`
  );
  const handleClick = (e: any) => {
    setShowImg(e.target.src);
  };
  return (
    <>
      <div className="container-img">
        <img src={showImg} alt="" className="rounded" />

        <div className="con-select">
          {props.data.img.map((i: any) => (
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
          {props.data.productsname}({props.data.productscode})
        </h1>
        <div className="des">{props.data.description}</div>
        <div>السعر : {props.data.price} ج</div>

        <div> المكان : {props.data.location}</div>
        <div>الحالة : {props.data.status}</div>
        <div>
          {props.data.keyword.map((p: any) => (
            <span>{p} </span>
          ))}
        </div>
        <div>للتواصل : 01092042027</div>
      </div>
    </>
  );
};

export default ProductAvailable;
