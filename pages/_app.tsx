import Layout from "../components/Layout";
import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
