import dynamic from "next/dynamic";
import type { NextPage } from "next";

import Layout from "@component/Layout";
const Intro = dynamic(() => import("@layout/HomePage/Intro"));

const Home: NextPage = () => {
  return (
    <Layout title="Color pallete for your project ✨">
      <Intro />
    </Layout>
  );
};

export default Home;
