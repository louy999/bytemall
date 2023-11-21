import imgTest from "../img/bytemallLoco.png";

const ProductNotAvailable = (props: any) => {
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
          {props.data?.productsname}({props.data?.productscode})
        </h1>
        <div className="des">{props.data?.description}</div>
        <div> تم البيع</div>

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
