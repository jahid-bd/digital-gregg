/* eslint-disable @next/next/no-script-component-in-head */
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  subTitle: string;
};

const HeadElement = ({ subTitle }: Props) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.digitalgregg.com` +
    (router?.asPath === "/" ? "" : router?.asPath)
  ).split("?")[0];

  return (
    <>
      <Head>
        <title key="title">
          {subTitle
            ? `Digital Gregg | Software Development Company ${
                subTitle && " - " + subTitle
              }`
            : "Digital Gregg"}
        </title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Digital Gregg - Creating tailored digital experiences for small black-owned businesses. Let's elevate your online presence today!"
        />
        <meta
          property="og:description"
          content="American's finest custom software development company. Creating digital experiences for small black-owned businesses to leading Fortune 500 companies & brands. 5 years and counting."
        />
        <meta
          name="keywords"
          content="digital gregg digitalgregg software development company mobile development, project, explore, latest, next, design uiux, redesign, app"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Software Development Company | DigitalGregg America, USA"
        />
        <meta property="og:url" content="https://www.digitalgregg.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Acceleration Company | DigitalGregg"
        />
        <meta name="twitter:site" content="@digital_gregg" />
        <meta
          property="og:site_name"
          content="DigitalGregg Software America, USA"
        ></meta>
        <meta name="DG" content="index, follow" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
    </>
  );
};

export default HeadElement;
