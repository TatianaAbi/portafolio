import React from "react";
import { Link } from "react-router-dom";
import "../../styles/button.css";
import { propsButton } from "../interfaces";



function Button({ link, name }:propsButton) {
  return (
    <Link to={`/${link}`} className="button center-item">
      {name}
    </Link>
  );
}

export { Button };
