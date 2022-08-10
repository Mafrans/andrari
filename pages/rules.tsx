import type { NextPage } from "next";
import Head from "next/head";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { DocsLayout } from "../layouts/DocsLayout/DocsLayout";

const Rules: NextPage = () => {
  return (
    <>
      <Head>
        <title>rules</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DocsLayout></DocsLayout>
    </>
  );
};

export default Rules;
