import React from "react";
import TemplateMarkdown from "markdown-to-jsx";

import * as T from "./markdown.style";

const Markdown: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <T.ContainerMarkdown>
      <TemplateMarkdown>{markdown}</TemplateMarkdown>
    </T.ContainerMarkdown>
  );
};

export default Markdown;
