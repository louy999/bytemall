import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import env from "../env";

const SearchAndProducts = () => {
  const [dataPro, setDataPro] = useState<any[]>([]);
  const [input, setInput] = useState({
    reqSearch: "",
  });
  const handelChange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const columns: GridColDef[] = [
    { field: "productscode", headerName: "Code", width: 70 },

    { field: "productsname", headerName: "Name", width: 130 },
    {
      field: "location",
      headerName: "Location",
      width: 90,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    { field: "available", headerName: "Available", width: 130 },
  ];

  const getAllProducts = async () => {
    try {
      axios.get(`${env.url}/pro`).then((res) => {
        setDataPro(res.data.data);
        console.log(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);
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
          <button type="button" className="btn btn-primary">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }} className="container">
        <DataGrid
          rows={dataPro.filter((r: any): any => {
            return input.reqSearch === ""
              ? r
              : r.productscode.toLowerCase().includes(input.reqSearch);
          })}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default SearchAndProducts;
