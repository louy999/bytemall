import env from "../env";
import { useState } from "react";

const ProductNotAvailable = (props: any) => {
  const [showImg, setShowImg] = useState<any>(
    `${env.img}/image/${props.data.img[0]}`
  );

  const handleClick = (e: any) => {
    setShowImg(e.target.src);
  };
  if (!props.data) {
    return <p>Data not available</p>;
  }

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
          {props.data?.productsname}({props.data?.productscode})
        </h1>
        <div className="des">{props.data?.description}</div>
        <div className="avil">
          <span> تم البيع</span>
        </div>

        <div> المكان : {props.data?.location}</div>
        <div>
          {props.data?.keyword.map((p: any) => (
            <span>{p} </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductNotAvailable;
