import "../assets/css/component/Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="Navigation">
      <div>
        <Link to={"/meeting"}>
          <button className="Header-button" variant="secondary">
            MEETING
          </button>
        </Link>
        <Link to={"/note"}>
          <button className="Header-button" variant="secondary">
            NOTE
          </button>
        </Link>
        <Link to={"/community"}>
          <button className="Header-button" variant="secondary">
            COMMUNITY
          </button>
        </Link>
      </div>
      <div className="LoginJoin">
        <button variant="info">Login/Join</button>
      </div>
    </div>
  );
}

export default Navigation;
