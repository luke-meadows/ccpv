import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import '../styles/fontello/css/fontello.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="CCPV - Photography & Videography"
        description=""
        canonical="https://www.ccpv.co.uk"
        keywords=""
        openGraph={{
          url: 'https://www.ccpv.co.uk',
          title: 'CCPV - Photography & Videography',
          description: '',
          type: 'website',
          images: [
            {
              url: 'https://github.com/luke-meadows/above-and-beyond-solutions/blob/main/public/assets/logos/thumbnail-black-logo.svg',
              width: 800,
              height: 600,
              alt: 'CCPV - Photography & Videography',
              type: 'image/jpeg',
            },
            {
              url: 'https://github.com/luke-meadows/above-and-beyond-solutions/blob/main/public/assets/logos/thumbnail-black-logo.svg',
              width: 900,
              height: 800,
              alt: 'CCPV - Photography & Videography',
              type: 'image/jpeg',
            },
          ],
          site_name: 'CCPV - Photography & Videography',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
