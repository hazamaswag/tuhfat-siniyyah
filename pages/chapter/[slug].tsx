import Head from "next/head";
import { chapters } from "../../lib/data";
import Toggle from "../../src/components/Toggle";
import { IChapters } from "../../IChapters";

export default function ChapterPage({ title, content }: IChapters) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="my-4">
        <h1 className="text-6xl font-bold text-center leading-loose underline">
          {title}
        </h1>
      </header>
      <main>
        {/* <div className="text-center"> */}
        <h1 className="text-center">MATN</h1>
        <Toggle content={content.matn} />
        {/* </div> */}
        <h1 className="text-center">Commentary</h1>
        <Toggle content={content.commentary} />
        <h1 className="text-center">Exercises</h1>
        <Toggle content={content.exercises} />
        <h1 className="text-center">Questions</h1>
        <Toggle content={content.questions} />
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
