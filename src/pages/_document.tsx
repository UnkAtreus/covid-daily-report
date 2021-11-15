import React from 'react';

import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = Record<string, unknown>;

class Document extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html lang="th">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

          <link
            href="https://fonts.googleapis.com/css2?family=K2D:wght@300;400;500&display=swap"
            rel="stylesheet"
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

export default Document;
