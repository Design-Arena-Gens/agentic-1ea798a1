import '@/styles/globals.css';
import { DefaultSeo } from 'next-seo';
import seoConfig from '@/lib/seoConfig';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  );
}
