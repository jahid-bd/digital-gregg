/* eslint-disable @next/next/no-sync-scripts */
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Website",
    name: "Digital Gregg",
    url: "https://www.digitalgregg.com/",
    image: "https://www.digitalgregg.com/images/who_we_are/who-are-we.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: "750 E Main St Stamford, CT",
      addressLocality: "America",
      addressRegion: "USA",
      postalCode: "06902",
      addressCountry: "USA",
    },
    description:
      "Digital Gregg specializes in creating customized digital experiences for small black-owned businesses. Let us help you stand out online and reach your target audience with our expert design and development services.",
    keywords:
      "UI, UX, design, web development, portfolio, digital gregg, software development, IT technology, mobile development, product design",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.digitalgregg.com/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
    offers: {
      "@type": "Service",
      name: "Software development, IT technology, mobile development, product design, UX/UI Design",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.digitalgregg.com/",
    },
    sameAs: [
      "https://twitter.com/digital_gregg",
      "https://www.instagram.com/Digitalgregg/",
    ],
  };

  return (
    <Html lang="en">
      <Head>
        <script
          key="schema-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
        {/* Hotjar Tracking Code for Digital Gregg */}
        <Script id="hotjar" strategy="lazyOnload" src="/js/hotjar.js"></Script>

        {/* Google tag  */}
        <Script
          id="google-tag"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-M6BDPR8HMC"
        ></Script>

        <Script id="ga4" strategy="lazyOnload" src="/js/ga4.js"></Script>

        {/* Meta Pixel Code  */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '230486142744551');
fbq('track', 'PageView');`,
          }}
        ></Script>
        <noscript>
          <img
            height="1"
            width="1"
            className="hidden"
            alt="facebook"
            src="https://www.facebook.com/tr?id=230486142744551&ev=PageView&noscript=1"
          />
        </noscript>
        <meta
          name="facebook-domain-verification"
          content="10f1nqc5b9us0am9yyvp2ltzyqqawx"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
