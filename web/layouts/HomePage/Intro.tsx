import React from "react";
import Link from "next/link";
import { Clipboard, GitHub } from "react-feather";
import { copyToClipboard } from "copy-lite";

import * as T from "./homepage.style";
import toast from "react-hot-toast";

const Intro: React.FC = () => {
  const handleClick = () => {
    copyToClipboard("npm install colorcrafts --save-dev");
    toast.success("Copied to clipboard");
  };

  return (
    <T.Article>
      <T.Section>
        <T.Heading>Colorcrafts</T.Heading>
        <T.Description>
          🎨 A color system for designing beautiful and accessible{" "}
          <T.GradientText>interfaces</T.GradientText>.
        </T.Description>
        <T.CodeBlock onClick={handleClick}>
          <T.Code>npm i colorcrafts --save-dev</T.Code>
          <Clipboard />
        </T.CodeBlock>
        <T.LinksWrapper>
          <Link href="/docs" passHref>
            <T.TextLink>Documentation</T.TextLink>
          </Link>
          <Link href="https://github.com/radespratama/colorcrafts" passHref>
            <T.TextLink target="_blank" rel="noreferrer noopener">
              GitHub
              <GitHub />
            </T.TextLink>
          </Link>
        </T.LinksWrapper>
      </T.Section>
    </T.Article>
  );
};

export default Intro;
