import React from "react";
import { useState } from "react";
import { IChapters } from "../../IChapters";

const Toggle = ({ content }: IChapters) => {
  const [text, setText] = useState(content.matn.arabic);
  return (
    <>
      <p>{text}</p>
      <button
        type="button"
        onClick={() =>
          text === content.matn.arabic
            ? setText(content.matn.voweled)
            : setText(content.matn.arabic)
        }
      >
        toggle me
      </button>
    </>
  );
};

export default Toggle;
