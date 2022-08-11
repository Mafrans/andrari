import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { Block } from "../components/blocks";
import { getCollection, getSingle } from "../utils/strapi";

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  page,
}) => {
  const { Blocks } = page.attributes;

  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {Blocks.map((block) => (
          <Block key={block.id} {...block} />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const {
    data: [page],
  } = await getCollection<Collections.Post>("pages", {
    filters: {
      "[slug]": {
        "[$eq]": params?.slug,
      },
    },
    populate: "*",
  });

  return {
    props: {
      page,
    },
  };
};

export const getStaticPaths = async () => {
  const { data: pages } = await getCollection<Collections.Post>("pages");

  return {
    paths: pages.map(({ attributes }) => ({
      params: {
        slug: attributes.Slug,
      },
    })),
    fallback: true,
  };
};

export default Page;
