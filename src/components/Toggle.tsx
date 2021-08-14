import { spawn } from "node:child_process";
import React from "react";
import { useState } from "react";
import { IContent } from "../../IChapters";
import { ParseColor } from "./ParseColor";

const Toggle = ({ content }: IContent) => {
  const [text, setText] = useState(content.unvoweled);
  // const [vowel, setVowel] = useState("هِ هَ هُ");
  const [vowel, setVowel] = useState(false);
  if (!text) return null;

  return (
    <>
      <div className="flex">
        <div className="flex-1 text-right mx-2 my-2 text-2xl">
          {/* {text} */}
          <ParseColor vowel={vowel} text={text} />
        </div>
        <button
          className={`border-2 p-2 rounded-lg focus:outline-none
            ${
              !vowel
                ? "hover:bg-gray-100"
                : "bg-red-500 bg-opacity-50 hover:bg-opacity-40"
            }`}
          type="button"
          onClick={() => {
            if (text === content.unvoweled) {
              setText(content.voweled);

              // setVowel("ه ه ه");
              setVowel(true);
            } else {
              setText(content.unvoweled);
              // setVowel("هِ هَ هُ");
              setVowel(false);
            }
          }}
        >
          <ParseColor vowel={vowel} text={"ه  ه  ه"} />
          {/* {console.log(vowel)} */}
        </button>
      </div>
      <p className="text-left ">{content.english}</p>
    </>
  );
};

export default Toggle;
