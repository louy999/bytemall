import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input, setInput] = useState({
    productsName: "",
    price: "",
    date: "",
    keyword: "",
    available: "",
    timeCreated: "",
    img: "",
    location: "",
    status: "",
    productsCode: "",
    description: "",
  });
  const handelChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(input);
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Products
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  اسم المنتج
                </label>
                <input
                  type="text"
                  onChange={handelChange}
                  name="productsName"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  سعر المنتج
                </label>
                <input
                  type="text"
                  onChange={handelChange}
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
                  name="keyword"
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>
              <div className="mb-3">
                <input className="form-control" type="file" id="formFile" />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  موقع المنتج
                </label>
                <input
                  type="text"
                  onChange={handelChange}
                  name="location"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  حالة المنتج
                </label>
                <input
                  type="text"
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
                ></textarea>
              </div>
              <input type="button" value="اضافة" className="btn btn-primary" />
            </>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
