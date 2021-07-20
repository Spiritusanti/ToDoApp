import { Link } from "react-router-dom";
import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1>
          <Link to="/">Checklist</Link>
        </h1>
        <span>A not so average To Do App</span>
      </div>
    </div>
  );
};

export default Header;
