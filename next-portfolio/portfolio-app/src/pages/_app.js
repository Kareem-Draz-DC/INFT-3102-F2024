import "@/styles/globals.css";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter'

export default function App({ Component, pageProps }) {
  return (
  <AppCacheProvider {...pageProps}>
    <Component {...pageProps} />
  </AppCacheProvider>
  );
}
