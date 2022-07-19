import { styled, keyframes } from "@css/theme.config";

const TextClip = keyframes({
  to: {
    backgroundPosition: "200% center",
  },
});

export const Article = styled("article", {
  maxWidth: "$xl",
  margin: "0 auto",
});

export const Section = styled("section", {
  padding: "0 1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  justifyContent: "center",
  maxWidth: "25rem",
  margin: "0 auto",
  textAlign: "center",
});

export const Heading = styled("h1", {
  fontSize: "$text-5xl",
  lineHeight: "1.25",
  "@xs": {
    fontSize: "$text-6xl",
  },
});

export const Description = styled("p", {
  fontSize: "$text-xl",
  fontWeight: "400",
  marginBottom: "1.8rem",
  marginTop: "0.5rem",
  color: "$gray-400",
});

export const CodeBlock = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$gray-800",
  padding: "12px 20px",
  width: "100%",
  maxWidth: "25rem",
  overflow: "hidden",
  borderRadius: 10,
  cursor: "pointer",
  svg: {
    display: "none",
    "@xs": {
      display: "inline",
      width: 20,
      marginLeft: 10,
      "&:hover": {
        color: "$gray-500",
      },
    },
  },
  "@xs": {
    justifyContent: "space-between",
  },
});

export const Code = styled("pre", {
  fontFamily: "$mono",
  color: "$white-700",
  fontSize: "$text-sm",
  "@xs": {
    fontSize: "$text-base",
  },
});

export const LinksWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
  marginTop: 20,
});

export const TextLink = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  fontSize: "$text-lg",
  color: "$gray-400",
  textUnderlineOffset: "8px",
  "&:hover": {
    textDecoration: "underline",
    color: "$white-950",
  },
  svg: {
    width: 20,
    marginLeft: 8,
  },
});

export const GradientText = styled("span", {
  backgroundImage: "linear-gradient(200deg, #0ea5e9 20%, #fff800)",
  backgroundSize: "200% auto",
  textFillColor: "transparent",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  color: "$white-950",
  backgroundClip: "text",
  animation: `${TextClip} 2s linear infinite`,
});
