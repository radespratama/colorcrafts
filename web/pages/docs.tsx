import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import matter from "gray-matter";
import type { NextPage, GetStaticProps } from "next";

import { styled } from "@css/theme.config";
import Layout from "@component/Layout";
import { Colors, Docs } from "@type/types";

const Intro = dynamic(() => import("@layout/DocsPage/Intro"));

const Container = styled("div", {
  position: "relative",
  maxWidth: "$md",
  margin: "0 auto",
  padding: "1rem",
  minHeight: "100vh",
});

const Docs: NextPage<{ docs: [Docs]; colors: [Colors] }> = ({
  docs,
  colors,
}) => {
  return (
    <Layout title="Documentation">
      <Container>
        <Intro docs={docs} colors={colors} />
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fetchColor = await fetch(
    `${process.env.NEXT_PUBLIC_PUBLIC_API}/colors`
  );
  const colors = await fetchColor.json();

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
      colors: colors,
    },
  };
};

export default Docs;
