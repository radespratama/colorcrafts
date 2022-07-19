import Markdown from "@component/Markdown";
import React from "react";

import * as T from "./docspage.style";

const Intro: React.FC<{ docs: any }> = ({ docs }) => {
  const { content } = docs[0];

  return (
    <T.Article>
      <Markdown markdown={content} />
    </T.Article>
  );
};

export default Intro;
