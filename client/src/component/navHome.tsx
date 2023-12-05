import { NavLink } from "react-router-dom";
import imgLogo from "../img/bytemallLoco.ico";
const NavHome = () => {
  return (
    <>
      <nav className="navbar navHome">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={imgLogo} alt="Bootstrap" />
          </NavLink>
          <NavLink className="btn " to="/">
            الرجوع للصفحة الرئيسية
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavHome;
