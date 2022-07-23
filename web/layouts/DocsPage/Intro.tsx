import React from "react";

import * as T from "./docspage.style";

import ButtonToHome from "@component/ButtonToHome";
import Markdown from "@component/Markdown";
import ColorChart from "@component/ColorChart";

import { Colors, Docs } from "@type/types";

interface IProps {
  docs: [Docs];
  colors: [Colors];
}

const Intro: React.FC<IProps> = ({ docs, colors }) => {
  const { content } = docs[0];

  return (
    <>
      <T.Article>
        <Markdown markdown={content} />
      </T.Article>
      <T.Article>
        <T.Heading>Color Pallete</T.Heading>
        <T.Description>Color Palettes for Designer and Artist. ✨</T.Description>
        <T.Section>
          <ColorChart colors={colors} />
        </T.Section>
      </T.Article>
      <ButtonToHome />
    </>
  );
};

export default Intro;
