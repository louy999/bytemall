import imgTest from "../img/bytemallLoco.png";

const ProductAvailable = (props: any) => {
  const times = new Date(props.data.date);

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

        <div>
          <span> المكان : {props.data.location}</span>
          <span>الحالة : {props.data.status}</span>
        </div>
        <div>{times.toDateString()}</div>
        <div>
          {props.data.keyword.map((p: any) => (
            <span>{p}/</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductAvailable;
