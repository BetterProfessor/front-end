import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="back">
      <nav className="links">
        <h1>Better Professor</h1>
        <Link className="navLinks" to={"/Register"}>
          Register{" "}
        </Link>
        <Link className="navLinks" to={"/"}>
          Login{" "}
        </Link>
      </nav>
    </div>
  );
}
