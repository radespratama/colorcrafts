import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer"));

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const { asPath } = useRouter();
  return (
    <>
      <title>{`Colorcrafts - ${title}`}</title>
      <meta name="title" content={`Colorcrafts - ${title}`} />
      <meta name="description" content="A color system for designing beautiful and accessible interfaces." />
      
      <meta property="og:type" content="website" />
      <meta property="og:url" content={``} />
      <meta property="og:title" content={`Colorcrafts - ${title}`} />
      <meta property="og:description" content="A color system for designing beautiful and accessible interfaces." />
      <meta property="og:image" content="" />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={``} />
      <meta property="twitter:title" content={`Colorcrafts - ${title}`} />
      <meta property="twitter:description" content="A color system for designing beautiful and accessible interfaces." />
      <meta property="twitter:image" content="" />
      <link rel="canonical" href={``} />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
