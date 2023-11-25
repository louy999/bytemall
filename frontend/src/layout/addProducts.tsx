import React, { useState, useEffect } from "react";
import axios from "axios";
import env from "../env";

import { useNavigate } from "react-router-dom";
export default function BasicModal() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.items === undefined) {
      navigate("/dash/lock");
    } else {
    }
  }, []);
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
  const [file, setFile] = useState<any>(null);
  const [showImg, setShowImg] = useState<any>("");
  const [err, setErr] = useState<any>("");

  const handelChange = (e: any) => {
    if (e.target.name === "keyword") {
      // If the target is the keyword, split the value into an array
      setInput((prev) => ({
        ...prev,
        [e.target.name]: e.target.value.split(" "),
      }));
      console.log(input.status);
    } else {
      // Otherwise, update the state normally
      setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    console.log(input.status);
  };
  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };
  const addImg = () => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("image", file);
      axios
        .post(`${env.img}/upload`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res: any) => {
          input.img.push(res.data);
          return setShowImg(
            input.img.map((i) => (
              <img
                src={`${env.img}/image/${i}`}
                alt=""
                className="rounded img"
              />
            ))
          );
        });
    } else {
      setErr("اختار الصورة اولا");
      setTimeout(() => {
        setErr("");
      }, 5000);
    }
  };
  const addProjects = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`${env.url}/pro`, input).then((res) => {
        navigate(`/dash/pro/${res.data.data.id}`);
      });
    } catch (error) {}
  };

  return (
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
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
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

      <div className="input-group">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          onChange={handleFileChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
          onClick={addImg}
        >
          Button
        </button>
      </div>
      <div>{showImg}</div>
      <div>{err}</div>

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
        <select
          className="form-select"
          onChange={handelChange}
          name="status"
          aria-label="Default select example"
        >
          <option value="جديد" selected disabled>
            اختار الحالة
          </option>
          <option value="جديد">جديد</option>
          <option value="مستعمل">مستعمل</option>
          <option value=" مستعمل كجديد">مستعمل كجديد</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
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
      <input
        type="submit"
        value="اضافة"
        className="btn btn-primary"
        onClick={addProjects}
      />
    </form>
  );
}
