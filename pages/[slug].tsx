import type {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { Block } from "../components/blocks/Block";
import { Layout } from "../layouts/Layout";
import { getCollection } from "../utils/strapi";

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  page = null,
}) => {
  if (!page) {
    return null;
  }

  const { Blocks, Layout: layout } = page.attributes;

  return (
    <Layout type={layout}>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Blocks?.map((block) => (
        <Block key={block.id} {...block} />
      ))}
    </Layout>
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
