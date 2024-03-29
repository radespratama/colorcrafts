## Instalation

Install Colorcrafts from your terminal via npm or yarn.

```bash
# With yarn
yarn add --dev colorcrafts

# With npm
npm install colorcrafts --save-dev
```

## Basic Configuration

If you using library CSS-in-JS like <a href="https://stitches.dev/" target="_blank">Stitches</a>, etc. You can use a configuration like this.

### Stitches :

```javascript
import { createStitches } from "@stitches/react";
import * as Colors from "colorcrafts";

export const { getCssText, globalCss, styled } = createStitches({
  theme: {
    colors: {
      ...Colors.Amber,
      ...Colors.Aquamarine,
      ...Colors.Black,
      ...Colors.Blue,
      ...Colors.Blue,
      ...Colors.Citrus,
      ...Colors.Cyan,
      ...Colors.Emerald,
      ...Colors.ForestGreen,
      ...Colors.Fuchsia,
      ...Colors.Gray,
      /* ... */
    },
    fonts: {},
    fontSizes: {},
    sizes: {},
  },
  media: {},
});



/** ==== | HOW TO USING | ==== */

export const ColorSwatch = styled("div", {
  padding: "0.875rem 0.5rem",
  color: "$gray-800",
  cursor: "pointer",
});

/** ========================= */

```

### Tailwindcss :

```javascript
const Colors = require("colorcrafts");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...Colors.Blue,
      ...Color.White,
    },
  },
  plugins: [],
};



/** ==== | HOW TO USING | ==== */

<div className="bg-blue-900 text-white-800">
  colorcrafts so awesome ✨
</div>

/** ========================= */

```
