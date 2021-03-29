import React from "react";
import { useState } from "react";
import { IContent } from "../../IChapters";

const Toggle = ({ content }: IContent) => {
  const [text, setText] = useState(content.arabic);
  if (!text) return null;
  return (
    <>
      <div className="flex">
        <p className="flex-1 text-right mx-2 my-2 text-2xl">{text}</p>
        <button
          className="border-2 p-1 rounded-lg my-2"
          type="button"
          onClick={() =>
            text === content.arabic
              ? setText(content.voweled)
              : setText(content.arabic)
          }
        >
          toggle me
        </button>
      </div>
      <p className="text-left ">{content.english}</p>
    </>
  );
};

export default Toggle;
