import "../static/css/font01.css";
import "../static/css/plugins/bootstrap.min.css";
import "../static/css/styles.css";
import "../static/css/plugins/swiper.min.css";
import "../static/css/plugins/lity.min.css";
// import '../static/css/plugins/animsition.min.css';
import Script from "next/script";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="/static/js/menu.js"></Script>
      <Component {...pageProps} />
    </>
  );
}
