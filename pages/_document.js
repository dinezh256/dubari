import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
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
