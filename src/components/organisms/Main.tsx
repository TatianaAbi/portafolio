import "../../styles/Main.css";
import React from "react";
import { Button } from "../atoms/Button";
import { ImgContent } from "../atoms/ImgContent";
import { InfoBox } from "../atoms/InfoBox";
const info = {
  title: "About Me",
  text: `Hello, I am Tatiana Abigail and I am a frontend developer.
    worked with javascript for web page development
    and also using libraries and frameworks like react or vue
    I also manage the styles and designs of my web pages`,
};

function Main({ children }:any) {
  return (
    <div className="main-container">
      <section className="article-container">
        <ImgContent style={"image_cart"} />
        <div className="description">
          <InfoBox sentence={info.text} title={info.title} />
          <Button name="More" link="about" />
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
}

export { Main };
