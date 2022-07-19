import { styled } from "@css/theme.config";

export const ContainerMarkdown = styled("div", {
  position: "relative",

  h2: {
    fontSize: "$text-4xl",
    color: "$gray-100",
    textDecoration: "underline",
  },
  p: {
    fontSize: "$text-lg",
    marginTop: "1rem",
    marginBottom: "2rem",
    lineHeight: "1.5",
  },
  "p > a": {
    color: "$blue-500",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  pre: {
    padding: "0.875rem",
    marginBottom: 20,
    backgroundColor: "$gray-900",
    borderRadius: 8,
    overflowX: "auto",
  },
  h3: {
    fontSize: "$text-xl",
    padding: "0.375rem 1rem",
    backgroundColor: "$gray-800",
    marginBottom: 10,
    maxWidth: "fit-content",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "$gray-900",
    },
  },
});
