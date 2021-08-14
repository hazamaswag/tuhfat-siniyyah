import React from "react";

export const ParseColor = ({ vowel, text }) => {
  let res = [];
  for (let word of text) {
    for (let char of word) {
      if (char === "َ" || char === "ُ" || char === "ِ") {
        res.push(
          <span lang={"ar"} className="text-blue-600">
            {char}
          </span>
        );
      } else {
        res.push(char);
      }
    }
  }

  return (
    <div dir={"rtl"}>
      {
        vowel
          ? // <span>ه ه ه</span>
            res
          : text
        // <p>
        //   ه
        //   <span lang={"ara"} style={{ color: "rgb(37, 99, 235)" }}>
        //     َ&nbsp;
        //   </span>
        //   ه
        //   <span lang={"ara"} style={{ color: "blue" }}>
        //     ِ&nbsp;
        //   </span>
        //   ه
        //   <span lang={"ara"} style={{ color: "blue" }}>
        //     ُ
        //   </span>
        // </p>
      }
    </div>
  );
};
