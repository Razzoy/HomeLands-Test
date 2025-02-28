import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import {UserContext} from '../../context/UserContext'
import { useContext } from "react";

export function NavBar() {
  const { userData, setUserData } = useContext(UserContext);

  const handleAuthClick = () => {
    if (userData) {
      setUserData(null);
      sessionStorage.removeItem("userData");
      window.location.reload();
    }
  };

  return (
    <>
      <ul className={style.navbarStyling}>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/houses">Boliger til salg</NavLink>
        </li>
        <li>
          <NavLink onClick={handleAuthClick} to="/login">
            {userData ? "Logout" : "Login"}
          </NavLink>
        </li>
      </ul>
    </>
  );
}
