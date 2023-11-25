import { NavLink } from "react-router-dom";
const NavDash = () => {
  return (
    <>
      <ul className="nav nav-dash">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            صفخة العميل
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dash">
            صفحة الادمن
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavDash;
