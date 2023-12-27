import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Dragons">Dragons</Link>
          </li>
          <li>
            <Link to="/Missions">Missions</Link>
          </li>
          <li>
            <Link to="/MyProfile">MyProfile</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
