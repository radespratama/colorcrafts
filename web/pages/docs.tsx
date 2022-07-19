import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import matter from "gray-matter";
import type { NextPage, GetStaticProps } from "next";

import { styled } from "@css/theme.config";
import Layout from "@component/Layout";

import ColorPallete from "@layout/DocsPage/ColorPallete";
const Intro = dynamic(() => import("@layout/DocsPage/Intro"));

interface DocsProps {
  docs: string;
}

const Container = styled("div", {
  position: "relative",
  gap: "1rem",
  maxWidth: "$md",
  margin: "0 auto",
  padding: "1rem",
  minHeight: "100vh",
});

const Docs: NextPage<DocsProps> = ({ docs }) => {
  return (
    <Layout title="Documentation">
      <Container>
        <Intro docs={docs} />
        <ColorPallete />
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("data"));
  const docs = files.map((file) => {
    const slug = file.replace(".md", "");

    const markdownWithMetadata = fs.readFileSync(
      path.join("data", file),
      "utf8"
    );

    const { content } = matter(markdownWithMetadata);
    return {
      slug,
      content,
    };
  });

  return {
    props: {
      docs: docs,
    },
  };
};

export default Docs;
