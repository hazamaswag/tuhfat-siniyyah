import Link from "next/link";
import Head from "next/head";
import { chapters } from "../lib/data";
import React from "react";
// import * as React from "react";
import ChaptersListItem from "../src/components/ChaptersListItem";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tuhfat</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="my-4">
        <h1 className="text-6xl font-bold text-center">Tuhfat</h1>
      </header>

      <div className="space-y-4">
        {/* <h1>hello</h1> */}
        {chapters.map((post) => (
          <ChaptersListItem key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}
