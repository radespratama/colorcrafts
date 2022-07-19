import { styled } from "@css/theme.config";

export const Article = styled("article", {
  gridColumn: "span 12 / span 12",
  "@lg": {
    gridColumn: "span 9 / span 9",
  },
});
