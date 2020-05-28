import React from "react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div className="back">
      <nav className="links">
        <div>
          <Link className="navLinks" to={"/Dashboard"}>
            Dashboard{" "}
          </Link>
        </div>
        <div>
          <Link className="navLinks" to={"/Register"}>
            Register{" "}
          </Link>
        </div>
        <div>
          <Link className="navLinks" to={"/"}>
            Login{" "}
          </Link>
        </div>
      </nav>
    </div>
  );
}
