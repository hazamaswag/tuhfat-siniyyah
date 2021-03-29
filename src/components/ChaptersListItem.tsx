// import * as React from "react";
import React from "react";
import Link from "next/link";

const ChaptersListItem = ({ slug, title }) => {
  return (
    <div className="border border-black-400 shadow hover:shadow-md rounded-md transition duration-200 ease-in">
      <Link href={`/chapter/${slug}`} as={`/chapter/${slug}`}>
        <a className="text-2xl font-bold block p-4 text-right">{title}</a>
      </Link>
    </div>
    // {/* // maybe add the mtn as well? */}
  );
};

export default ChaptersListItem;
