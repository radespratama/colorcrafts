import { globalCss } from "./theme.config";

const globalStyle = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    scrollBehavior: "smooth",
    fontFamily: "$sans",
  },
  "@font-face": {
    fontFamily: "Cascadia Code",
    src: "url('/fonts/CascadiaCode.woff2') format('woff2')",
  },
  "html, body": {
    overflowX: "hidden",
    color: "$white-950",
    backgroundColor: "$primary",
  },
  a: {
    textDecoration: "none",
    cursor: "pointer",
  },
  "pre > code": {
    fontFamily: "$mono !important",
    lineHeight: "1.5",
    color: "$gray-100",
  },
});

export default globalStyle;
