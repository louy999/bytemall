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
    </>
  );
};

export default ProductNotAvailable;
