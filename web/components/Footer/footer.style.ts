import { styled } from "@css/theme.config";

export const Footers = styled("footer", {
  maxWidth: "$xl",
  margin: "0 auto",
  padding: "1rem",
  borderTop: "1px solid $gray-800",
});

export const Section = styled("section", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const H2 = styled("h2", {
  fontSize: "$text-base",
  fontWeight: "400",
});
