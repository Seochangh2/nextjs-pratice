import Head from "next/head";
import React from "react";
type SeoProps = {
  title: string;
};
const Seo: React.FC<SeoProps> = ({ title }) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
};
export default Seo;
