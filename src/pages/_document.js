import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta name="THE REALMS DAO" content="Community Owned 1/1 Collection" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=League+Spartan&display=optional" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <div className="bg-container">
            <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
              <div className="text-center">
                <h1 className="text-5xl font-bold header siteHeader"><Link href="/">THE REALMS DAO</Link></h1>
              </div>
              {/* <div className="text-center pt-2">
                <div className="text-center">
                  <table className="navTable">
                    <tr>
                      <td className="navTableItem">
                        <Link href="/">HOME</Link>
                      </td>
                      <td className="navTableItem">
                        <Link href="/realms">REALMS</Link>
                      </td>
                      <td className="navTableItem">
                        <Link href="/gallery">COMMUNITY GALLERY</Link>
                      </td>
                      <td className="navTableItem">
                        <Link href="/js">JOIN</Link>
                      </td>
                    </tr>
                  </table>
                </div>
              </div> */}
            </div>
          <Main />
          <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
