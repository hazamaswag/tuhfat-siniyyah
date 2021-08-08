import React from "react";

export const ParseColor = ({ vowel }) => {
  console.log(vowel);
  let txt = "";
  if (!vowel) {
    txt = "yeet";
  } else {
    txt = "no yeet";
  }
  console.log(txt);
  return (
    <div>
      {vowel ? (
        <span>ه ه ه</span>
      ) : (
        <p>
          ه
          <span lang={"ara"} style={{ color: "rgb(37, 99, 235)" }}>
            َ&nbsp;
          </span>
          ه
          <span lang={"ara"} style={{ color: "blue" }}>
            ِ&nbsp;
          </span>
          ه
          <span lang={"ara"} style={{ color: "blue" }}>
            ُ
          </span>
        </p>
      )}
      {/* {console.log(txt)} */}
      {/* {txt} */}
    </div>
  );
};
