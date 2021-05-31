import React from "react";
import { useState } from "react";
import { IContent } from "../../IChapters";

const Work = ({ s }) => {
  let new_str = ["<h1>"];
  for (let letter of s) {
    if ("َُِ".indexOf(letter) != -1) {
      new_str.push("<span style='color: #ff0000'>" + letter + "</span>");
    } else {
      new_str.push(letter);
    }
  }
  new_str.push("/<h1>");
  let j = new_str.join();
  return <div dangerouslySetInnerHTML={{ __html: j }} />;
};

const Toggle = ({ content }: IContent) => {
  const [text, setText] = useState(content.unvoweled);
  const [vowel, setVowel] = useState("هِ هَ هُ");
  if (!text) return null;

  return (
    <>
      <div className="flex">
        <p className="flex-1 text-right mx-2 my-2 text-2xl">{text}</p>
        {content.unvoweled[0].split("").map((letter) => {
          if ("َُِ".indexOf(letter) != -1) {
            return <span style={{ color: "blue" }}>{`${letter}`}</span>;
          } else {
            return <span>{letter}</span>;
          }
        })}
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
