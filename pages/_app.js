import Layout from "../components/Layout";
import "../styles/globals.css"; // Ensure styles are loaded
import "bootstrap/dist/css/bootstrap.min.css";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;