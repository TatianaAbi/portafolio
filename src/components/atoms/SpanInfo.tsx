import React from "react";
import { propsSpan } from "../interfaces";

function SpanInfo({ date, sentence }:propsSpan) {
  return (
    <li>
      <span>{date}</span> {sentence}
    </li>
  );
}

export { SpanInfo };
