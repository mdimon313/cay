import React from "react";
import { Link } from "react-router-dom";

function Nav({ theme, changeTheme }) {
  return (
    <nav className=" py-5 flex items-center justify-center bg-slate-300">
      <ul className="container mx-auto flex items-center justify-center">
        <li>
          <Link className="mx-2 text-blue-600" to="/">
            Signup
          </Link>
        </li>
        <li>
          <Link className="mx-2 text-blue-600" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
