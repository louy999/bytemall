import { NavLink } from "react-router-dom";
import img1 from "../img/bytemallLoco.png";
// import videoBack from "../img/video (1080p).mp4";
import videoBack from "../img/production_id_3770034 (1080p).mp4";

const Navbar = () => {
  return (
    <>
      <nav className="navbar ">
        <video src={videoBack} autoPlay loop muted />
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={img1}
              alt="Logo"
              className="d-inline-block align-text-top"
            />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
