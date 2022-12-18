import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta name="PenguLove Curation Contest - JS' Gallery" content="PenguLove Curation Contest - JS' Gallery" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <div className="bg-container">
          <Main />
          <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
