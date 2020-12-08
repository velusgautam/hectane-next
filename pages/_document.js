import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://backend.hectane.com" />
          <link rel="preconnect" href="https://assets.hectane.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                const f = d.body,
                  j = d.createElement(s),
                  dl = l != 'dataLayer' ? '&l=' + l : '';
                j.defer = true;
                j.src = 'https://www.googletagmanager.com/gtag/js?id=' + i + dl;
                f.insertBefore(j, f.lastElementChild);
                w.WebFontConfig = { google: { families: ['Muli:400,600,800&display=swap'] } };
                const wf = d.createElement('script');
                wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                wf.type = 'text/javascript';
                wf.defer = 'true';
                f.insertBefore(wf, f.lastElementChild);
              })(window, document, 'script', 'dataLayer', 'UA-60696295-1');`
            }}
          />
          <script src="/lazysizes.min.js" async></script>
          <noscript>
            <h1>Javascript is required to run hectane.com.</h1>
          </noscript>
        </body>
      </Html>
    )
  }
}

export default MyDocument
