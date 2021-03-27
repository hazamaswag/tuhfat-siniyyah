import Link from "next/link";
import Head from "next/head";
import { chapters } from "../lib/data";
import * as React from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tuhfat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="my-4">
        <h1 className="text-6xl font-bold text-center">Tuhfat</h1>
      </header>

      <div className="space-y-4">
        {/* <h1>hello</h1> */}
        {chapters.map((post) => (
          <BlogListItem key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}

const BlogListItem = ({ slug, title, date, content }) => {
  return (
    <div className="border border-black-400 shadow hover:shadow-md rounded-md transition duration-200 ease-in">
      <Link href={`/chapter/${slug}`} as={`/chapter/${slug}`}>
        <a className="font-bold block p-4">{title}</a>
      </Link>
    </div>
    // {/* // maybe at the mtn as well? */}
  );
};
