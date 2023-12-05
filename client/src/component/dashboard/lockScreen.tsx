import React, { useState, useEffect } from "react";
import env from "../../env";
import { useNavigate } from "react-router-dom";
const LockScreen = () => {
  // console.log(process.env);

  const navigate = useNavigate();

  const [input, setInput] = useState<any>({
    password: "",
  });
  const [err, serErr] = useState<any>("");
  const handelChange = (e: any) => {
    setInput((prev: any) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (input.password === env.pass) {
      localStorage.setItem("items", JSON.stringify("admin"));
      navigate("/dash");
    } else {
      serErr("password wrong!...");
    }
  };
  useEffect(() => {
    if (localStorage.items === undefined) {
      console.log("no");
    } else {
      navigate("/dash");
    }
  }, []);
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handelChange}
          />
          <small>{err}</small>
        </div>
        <button type="submit" onClick={onSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LockScreen;
