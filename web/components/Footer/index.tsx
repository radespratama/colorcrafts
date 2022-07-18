import React from "react";
import * as T from "./footer.style";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <T.Footers>
      <T.Section>
        <T.H2>&copy; {year} Colorcrafts | Rades Pratama.</T.H2>
      </T.Section>
    </T.Footers>
  );
};

export default Footer;
