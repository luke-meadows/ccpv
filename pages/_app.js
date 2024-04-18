import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import '../styles/fontello/css/fontello.css';
import Script from 'next/script';

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
      <Script
        id="googleAnalytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-6R60NZ3QRH`}
      />
      <Script strategy="lazyOnload" id="googleAnalyticsDataLayer">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-6R60NZ3QRH', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Script type="text/javascript" id="accountEngagement">
        {` piAId = '1050802'; piCId = ''; piHostname = 'go.ccpv.co.uk';
                    (function() {
                      function async_load(){
                        var s = document.createElement('script'); s.type = 'text/javascript';
                        s.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + piHostname + '/pd.js';
                        var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
                      }
                      if(window.attachEvent) { window.attachEvent('onload', async_load); }
                      else { window.addEventListener('load', async_load, false); }
                    })();`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
