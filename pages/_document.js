import Document, { Html, Head, Main, NextScript } from 'next/document'

/*
A custom Document can update the <html> and <body> tags used to render a Page. 
This file is only rendered on the server, so event handlers like onClick cannot be used in _document.
*/

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument