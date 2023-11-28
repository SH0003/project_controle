import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function AdminLayout(){

    return(
        <>
  <div className="container-fluid">
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/home"}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/products"}>
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/contact"}>
                Contacts
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to={"/connexion"}>
                Connexion
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        <Outlet />
      </main>
    </div>
  </div>
</>

    )
}