import { styled } from "@css/theme.config";

export const Article = styled("article", {
  position: "relative",
});

export const Heading = styled("h1", {
  fontSize: "$text-4xl",
  textDecoration: "underline",
});

export const Description = styled("p", {
  fontSize: "$text-lg",
  fontWeight: 400,
  margin: "1rem 0",
});

export const Section = styled("section", {
  margin: "3rem 0",
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  "@xs": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
  "@xl": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
});
