import env from "../env";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const ProductAvailable = (props: any) => {
  const [showImg, setShowImg] = useState(
    `${env.img}/image/${props.data.img[0]}`
  );
  const handleClick = (e: any) => {
    setShowImg(e.target.src);
  };
  const message = `محتاج تفاصيل اكتر عن منتج 
  ${props.data.productsname}
  سعره 
  ${props.data.price}
  الكود
  ${props.data.productscode}`;
  return (
    <>
      <div className="container-img">
        <img src={showImg} alt="" className="rounded" />

        {props.data?.img && props.data.img.length > 0 && (
          <div className="con-select">
            {props.data.img.map((i: any, index: number) => (
              <img
                key={index}
                src={`${env.img}/image/${i}`}
                onClick={handleClick}
                alt=""
                className="rounded"
              />
            ))}
          </div>
        )}
      </div>
      <div className="container-details">
        <h1>
          {props.data.productsname}({props.data.productscode})
        </h1>
        <div className="des"> {props.data.description}</div>
        <div>
          السعر : <span>{props.data.price}ج</span>
        </div>

        <div>
          {" "}
          المكان : <span>{props.data.location}</span>
        </div>
        <div>
          الحالة : <span>{props.data.status}</span>
        </div>
        <div>
          التاريخ : <span>{props.data.date.slice(0, 10)}</span>
        </div>
        <div className="number">
          للتواصل : <span>01092042027</span>
          <NavLink to={`https://wa.me/201092042027?text=${message}`}>
            <FontAwesomeIcon className="whatsapp" icon={faSquareWhatsapp} />
          </NavLink>
        </div>

        <div className="keyword">
          {props.data.keyword.map((p: any) => (
            <span>{p} </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductAvailable;
