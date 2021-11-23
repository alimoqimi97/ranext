import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html dir={'rtl'} lang="fa"  >
        <Head>
          <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body dir="rtl" lang="fa">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;