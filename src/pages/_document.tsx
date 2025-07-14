import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2a2a2a" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#2a2a2a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

