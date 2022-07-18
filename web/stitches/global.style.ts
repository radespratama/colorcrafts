import { globalCss } from "./theme.config";

const globalStyle = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    scrollBehavior: "smooth",
    fontFamily: "$sans"
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
});

export default globalStyle;
