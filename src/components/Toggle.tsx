import React from "react";
import { useState } from "react";
import { IContent } from "../../IChapters";

const Toggle = ({ content }: IContent) => {
  const [text, setText] = useState(content.unvoweled);
  const [vowel, setVowel] = useState("هِ هَ هُ");
  if (!text) return null;

  return (
    <>
      <div className="flex">
        <p className="flex-1 text-right mx-2 my-2 text-2xl">{text}</p>
        <button
          className="border-2 p-1 rounded-lg my-2"
          type="button"
          onClick={() => {
            if (text === content.unvoweled) {
              setText(content.voweled);
              setVowel("ه ه ه");
            } else {
              setText(content.unvoweled);
              setVowel("هِ هَ هُ");
            }
          }}
        >
          {vowel}
        </button>
      </div>
      <p className="text-left ">{content.english}</p>
    </>
  );
};

export default Toggle;
