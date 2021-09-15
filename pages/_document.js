import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="preload"
            href="/fonts/Roboto/Roboto-Black.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Roboto/Roboto-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Roboto/Roboto-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Roboto/Roboto-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Masqualero/masqualeroRegular.otf"
            as="font"
            type="font/otf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Masqualero/masqualeroDemiBold.otf"
            as="font"
            type="font/otf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Masqualero/masqualeroBlack.otf"
            as="font"
            type="font/otf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/GTAmericaExpanded/GTAmericaExpandedBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <link
            rel="preload"
            href="/fonts/Kokila/KokilaRegular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.dubari.com" />
          <meta property="og:title" content="Dubori" />
          <meta
            property="og:description"
            content="Satindra Kumar Nath - blogging website"
          />
          <meta
            property="og:image"
            content="https://www.dubori.com/logo512.png"
          />

          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />

          
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.dubari.com" />
          <meta property="twitter:title" content="Dubori" />
          <meta name="twitter:site" value="@satindra_nath" />
          <meta
            property="twitter:description"
            content="Satindra Kumar Nath - blogging website"
          />
          <meta
            property="twitter:image"
            content="https://www.dubari.com/twitter.png"
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
