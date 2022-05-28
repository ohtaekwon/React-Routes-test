import { NavLink } from "react-router-dom";

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? "green" : "",
  };
}

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" style={getLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" style={getLinkStyle}>
          profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" style={getLinkStyle}>
          About
        </NavLink>
      </li>
    </ul>
  );
}
