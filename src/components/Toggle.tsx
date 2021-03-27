import React from "react";
import { useState } from "react";

const Toggle = ({ title, content, rev_content }) => {
  const [text, setText] = useState(content);
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
      <button
        type="button"
        onClick={() =>
          text === content ? setText(rev_content) : setText(content)
        }
      >
        toggle me
      </button>
    </>
  );
};

export default Toggle;
