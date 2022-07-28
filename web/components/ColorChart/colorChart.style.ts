import { styled, keyframes } from "@css/theme.config";

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

const Bounce = keyframes({
  "0%, 100%": {
    transform: "translateY(-25%)",
    animationTimingFunction: "cubic-bezier(0.5, 0, 1, 1)",
  },
  "50%": {
    transform: "translateY(0)",
    animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
  },
});

export const SpanBadge = styled("span", {
  backgroundColor: "$red-500",
  padding: "2px 10px",
  color: "$white-950",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 0.5rem",
  fontSize: "10px",
  borderRadius: 4,
  animation: `${Bounce} 0.5s infinite`,
});
