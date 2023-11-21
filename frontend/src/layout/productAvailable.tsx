import imgTest from "../img/chare-3d-model-fbx.jpg";

const ProductAvailable = (props: any) => {
  return (
    <>
      <div className="container-img">
        <img src={imgTest} alt="" />
        <div className="con-select">
          <img src={imgTest} alt="" />
          <img src={imgTest} alt="" />
          <img src={imgTest} alt="" />
          <img src={imgTest} alt="" />
          <img src={imgTest} alt="" />
          <img src={imgTest} alt="" />
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
