import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";

const EditModal = (props: any) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  interface InputState {
    productsName: string;
    price: number;
    keyword: any;
    available: string;
    img: string[];
    location: string;
    status: string;
    description: string;
  }
  const [input, setInput] = useState<InputState>({
    productsName: "",
    price: 12,
    keyword: [],
    available: "",
    img: [],
    location: "",
    status: "",
    description: "",
  });
  const handelChange = (e: any) => {
    if (e.target.name === "keyword") {
      // If the target is the keyword, split the value into an array
      setInput((prev: any) => ({
        ...prev,
        [e.target.name]: e.target.value.split(" "),
      }));
    } else {
      // Otherwise, update the state normally
      setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <form className="container">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                اسم المنتج
              </label>
              <input
                type="text"
                required
                onChange={handelChange}
                name="productsName"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                سعر المنتج
              </label>
              <input
                type="number"
                onChange={handelChange}
                required
                name="price"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                كلمات مفتاحية
              </label>
              <textarea
                className="form-control"
                onChange={handelChange}
                required
                name="keyword"
                id="exampleFormControlTextarea1"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                موقع المنتج
              </label>
              <input
                type="text"
                onChange={handelChange}
                name="location"
                required
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                حالة المنتج
              </label>
              <input
                type="text"
                required
                onChange={handelChange}
                name="status"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                وصف المنتج
              </label>
              <textarea
                onChange={handelChange}
                name="description"
                className="form-control"
                id="exampleFormControlTextarea1"
                required
              ></textarea>
            </div>
            <input type="submit" value="اضافة" className="btn btn-primary" />
          </form>
          <Button onClick={props.handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};

export default EditModal;
