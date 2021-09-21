import React from "react";

import { useSelector } from "react-redux";

import { nanoid } from "@reduxjs/toolkit";

import Loading from "./Loading";

function TextContent() {
  const text = useSelector((state) => state.texts.textList);

  const copyText = useSelector((state) => state.texts.copyList);

  const loading = useSelector((state) => state.texts.isLoading);

  const format = useSelector((state) => state.texts.format);
  if (loading) {
    return <Loading />;
  }

  if (format === "text") {
    return (
      <div className="text">
        {text.map((textItem) => (
          <span key={nanoid()}>{textItem}</span>
        ))}
      </div>
    );
  } else {
    return (
      <div className="text">
        {copyText.map((textItem) => (
          <span key={nanoid()}>
            {"<p>"}
            {textItem}
            {"</p>"}
          </span>
        ))}
      </div>
    );
  }
}

export default TextContent;
