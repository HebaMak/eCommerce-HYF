import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { provideContext } from "../hooks/context";

const Navbar = () => {
  const { clearFilter } = useContext(provideContext);

  return (
    <nav>
      <NavLink to="/" onClick={clearFilter}>
        Products
      </NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};

export default Navbar;
