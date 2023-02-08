import MainImg from "../assets/image/tmpheader2.jpg";
import "../assets/css/component/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div>
        <Link to={"/"}>
          <img src={MainImg} className="Header-logo" alt="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
