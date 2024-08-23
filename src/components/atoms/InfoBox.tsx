import React from "react";
import "../../styles/InfoBox.css";
import { propsBox } from "../interfaces";

function InfoBox({ title, sentence }:propsBox) {
  return (
    <div className="info-box">
      <h2 className="info-box_title">{title}</h2>
      <p>{sentence}</p>
    </div>
  );
}

export { InfoBox };
