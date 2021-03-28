import Head from "next/head";
import { chapters } from "../../lib/data";
import Toggle from "../../src/components/Toggle";
import { IChapters } from "../../IChapters";

export default function BlogPage({ title, content }: IChapters) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="my-4">
        <h1 className="text-6xl font-bold text-center underline">{title}</h1>
      </header>
      <main>
        <Toggle content={content} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  return {
    props: chapters.find((item) => item.slug == params.slug),
  };
}

export async function getStaticPaths() {
  return {
    paths: chapters.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
