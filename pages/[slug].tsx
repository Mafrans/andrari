import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { getCollection, getSingle } from "../utils/strapi";

const Page: NextPage<InferGetStaticPropsType<GetStaticProps>> = (context) => {
  console.log(context);
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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

export const getStaticPaths: GetStaticPaths = async () => {
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
