import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import env from "../env";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const SearchAndProducts = () => {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const [dataPro, setDataPro] = useState<any[]>([]);
  const [input, setInput] = useState({
    reqSearch: "",
  });
  const handelChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getAllProducts = async () => {
    try {
      axios.get(`${env.url}/pro`).then((res) => {
        setDataPro(res.data.data);
      });
    } catch (error) {}
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  const DeletePro = async (idPro: any) => {
    try {
      await axios
        .delete(`${env.url}/pro/${idPro}`)
        .then(() => getAllProducts());
    } catch (error) {}
  };
  return (
    <>
      <div className="search container">
        <div className="input-group">
          <input
            type="text"
            onChange={handelChange}
            name="reqSearch"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
          />
          <NavLink to="new">
            <button type="button" className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </NavLink>
          <button type="button" className="btn btn-primary">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }} className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">الكود</th>
              <th scope="col">الصورة</th>
              <th scope="col">الاسم</th>
              <th scope="col">المكان</th>
              <th scope="col">السعر</th>
              <th scope="col">متوافر</th>
              <th scope="col">مسح</th>
            </tr>
          </thead>
          <tbody>
            {dataPro
              .sort((a, b) => (a.status > b.status ? -1 : 1))
              .filter((p) =>
                input.reqSearch === ""
                  ? p
                  : p.productscode.toString().includes(input.reqSearch)
              )
              .map((p) => (
                <tr key={p.productscode}>
                  <th scope="row">{p.productscode}</th>
                  <td>
                    <NavLink to={`/dash/pro/${p.id}`}>
                      <img src={`${env.img}/image/${p.img[0]}`} alt="" />
                    </NavLink>
                  </td>
                  <td>{p.productsname}</td>
                  <td>{p.location}</td>
                  <td>{p.price}</td>
                  <td>{p.available ? "موجود" : "مش موجود"}</td>

                  <td>
                    <FontAwesomeIcon
                      onClick={() => {
                        handleClick();
                        DeletePro(p.id);
                      }}
                      icon={faTrash}
                      className="btn btn-danger"
                    />
                  </td>
                  <Stack spacing={2} sx={{ width: "100%" }}>
                    <Snackbar open={open} autoHideDuration={6000}>
                      <Alert severity="success" sx={{ width: "100%" }}>
                        This is a success Delete
                      </Alert>
                    </Snackbar>
                  </Stack>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchAndProducts;
