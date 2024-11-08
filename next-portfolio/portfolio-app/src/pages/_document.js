import { Html, Head, Main, NextScript } from "next/document";
import Footer from '../components/footer/footer';
import Header from "@/components/header/header";
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v15-pagesRouter'


export default function Document(props) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx)
  return finalProps;
}
