import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col text-center">
          <Link to={"/"}>
            <img src="../src/img/todotec.jpg" alt="Jabones Naturales" width={160} />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/celulares"}>Celulares</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/televisores"}>Televisores</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/tablets"}>Tablets</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/computadoras"}>Computadoras</NavLink>
            </li>
          </ul>
        </div>
        <div className="col text-end">
          <CartWidget/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;