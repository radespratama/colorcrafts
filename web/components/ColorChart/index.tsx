import React from "react";
import toast from "react-hot-toast";
import { copyToClipboard } from "copy-lite";

import { Colors } from "@type/types";
import * as T from "./colorChart.style";

interface IProps {
  colors: [Colors];
}

const ColorChart: React.FC<IProps> = ({ colors }) => {
  function handleCopy(hex: string) {
    copyToClipboard(hex);
    toast.success(`color ${hex} copied to clipboard`);
  }

  return (
    <>
      {colors.map((item) => (
        <T.ColorContainer key={item.id}>
          {item.list.map((color: any) => (
            <T.ColorSwatch
              key={color.id}
              style={{ backgroundColor: color.hex }}
              onClick={() => handleCopy(color.hex)}
            >
              <T.ColorName>{color.hex.toUpperCase()}</T.ColorName>
            </T.ColorSwatch>
          ))}
          <T.ColorSwatchWrapper>
            <T.ColorTitle>{item.title}</T.ColorTitle>
            {item.new && <T.SpanBadge>NEW</T.SpanBadge>}
          </T.ColorSwatchWrapper>
        </T.ColorContainer>
      ))}
    </>
  );
};

export default ColorChart;
