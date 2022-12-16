import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const setGoogleTags = () => {
    return {
      __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-147955896-1');
        `,
    };
  };

  return (
    <Html lang="en">
      <Head>
        {/* <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       */}
        {/* <!-- bootstrap css --> */}
        {/* <link rel="stylesheet" href="/static/css/plugins/bootstrap.min.css" /> */}
        {/* <link rel="stylesheet" href="/static/css/style.css" /> */}
        {/*same stylesheet in public folder */}
        {/* <!-- font awesome css --> */}
        <script src="/static/js/menu.js"></script>

        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* <Scripts /> */}
        <script dangerouslySetInnerHTML={setGoogleTags()}></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      {/* <script defer src="/static/js/smooth.js"></script> */}
    </Html>
  );
}
