import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://backend.hectane.com" />
          <link rel="preconnect" href="https://assets.hectane.com" />
          <link rel="preconnect" href="https://ajax.googleapis.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://www.gravatar.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />

          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Muli:400&display=swap"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                const f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtag/js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
                w.WebFontConfig = { google: { families: ['Muli:400,600,800&display=swap'] } };
                const wf = d.createElement('script');
                wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                wf.type = 'text/javascript';
                wf.async = 'true';
                f.parentNode.insertBefore(wf, f);
              })(window, document, 'script', 'dataLayer', 'UA-60696295-1');`,
            }}
          />
          <script src="/lazysizes.min.js" async></script>
          <noscript>
            <h1>Javascript is required to run hectane.com.</h1>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
