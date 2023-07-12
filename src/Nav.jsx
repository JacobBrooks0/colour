import { Outlet, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/colors">All the Colors</NavLink>
        <NavLink to="/createcolor">Create a Color</NavLink>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Nav
