import style from "./Footer.module.scss";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";

export function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerStyling}>
      <h2>HomeLands</h2>
      <ul>
        <li>Øster Uttrupvej 5</li>
        <li>9000 Aalborg</li>
      </ul>
      <ul>
        <li>Email: info@homelands.dk</li>
        <li>Telefon: +45 1122 3344</li>
      </ul>
      <div className={style.footerIconContainer}>
      <FaTwitterSquare />
      <ImFacebook2 />
      </div>
    </div>
    </div>
  );
}
