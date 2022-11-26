import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};

export default Navbar;
