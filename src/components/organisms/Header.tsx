import React from "react";
import "../../styles/Header.css";
import { HeaderInfo } from "../molecules/HeaderInfo";
import { ImgContent } from "../atoms/ImgContent";

function Header() {
  return (
    <div className="Header">
      <div className="header-shallow">
        <section className="profile">
          <div className="article-container">
            <ImgContent style={"image_circle max"} />
            <HeaderInfo />
          </div>
        </section>
      </div>
    </div>
  );
}

export { Header };
