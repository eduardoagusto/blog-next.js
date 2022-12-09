import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="bg-zinc-900 h-screen">
        <Head />
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
