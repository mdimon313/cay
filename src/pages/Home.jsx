import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <ul>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
