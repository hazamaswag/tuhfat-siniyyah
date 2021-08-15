import { workerData } from "node:worker_threads";
import React from "react";

interface IColor {
  vowel: boolean;
  text: string;
}

export const ParseColor = ({ vowel, text }: IColor) => {
  let res = [];
  let tokens = text.split(/[ ,]+/);
  for (let token of tokens) {
    for (let i = 0; i < token.length; i++) {
      // console.log(tokens[i]);
      if (i === token.length - 1) {
        res.push(
          <span lang={"ar"} className="text-blue-600">
            {token[i]}&nbsp;
          </span>
        );
      } else {
        res.push(<span>{token[i]}</span>);
      }
    }
    // for (let i = 0; i < word.length; i++) {
    //   if (i === word.length - 1) {
    //     res.push(
    //       <span lang={"ar"} className="text-blue-600">
    //         &zwj;{word[i]}
    //       </span>
    //     );
    //   } else {
    //     res.push(<span>{word[i]}</span>);
    //   }
    // }
    // if (char === "َ" || char === "ُ" || char === "ِ") {
    //   res.push(
    //     <span lang={"ar"} className="text-blue-600">
    //       &zwj;{char}
    //     </span>
    //   );
    // } else {
    //   res.push(<span>{char}</span>);
    // }
  }

  return (
    <div dir={"rtl"}>
      {
        vowel ? (
          // <span>ه ه ه</span>
          <span>{res} </span>
        ) : (
          // res
          text
        )
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
