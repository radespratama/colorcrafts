import { styled } from "@css/theme.config";

export const ColorContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "0.875rem",
  overflow: "hidden",
  marginBottom: 15,
});

export const ColorSwatch = styled("div", {
  padding: "0.875rem 0.5rem",
  color: "$white",
  cursor: "pointer",
});

export const ColorName = styled("p", {
  fontSize: "$text-sm",
  fontWeight: 400,
  letterSpacing: "0.035rem",
});

export const ColorSwatchWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ColorTitle = styled("h4", {
  fontSize: "$text-base",
  fontWeight: 500,
  margin: "0.5rem 0",
});
