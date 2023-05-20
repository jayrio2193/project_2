import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <nav className="navigation">
        <ul className="nav-li">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/todo">ToDo</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
