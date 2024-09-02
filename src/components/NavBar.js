import { Link, NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";

function NavBar() {
  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to="/">
        Navbar
      </NavLink>
      <nav>
        <ul>
          <li>
            <Link to="/">useState Hook</Link>
          </li>
          <li>
            <Link to="/use-reducer-hook">useReducer Hook</Link>
          </li>
          <li>
            <Link to="/use-effect-hook">useEffect Hook</Link>
          </li>
          <li>
            <Link to="/to-do">To do</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
          <li>
            <Link to="/wordpress">Wordpress</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/use-memo-hook">useMemo hook</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
