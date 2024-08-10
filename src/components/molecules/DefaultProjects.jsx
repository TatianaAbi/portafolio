import React from "react";
import "../../styles/DefaultProjects.css";
import CatImg from "../../img/cat.png";
import { ImgContent } from "../atoms/ImgContent";

function DefaultProjects() {
  return (
    <div className="container-info">
      <ImgContent img={CatImg} />
      <p className="default_margin">Some of my projects...</p>
    </div>
  );
}
export { DefaultProjects };
