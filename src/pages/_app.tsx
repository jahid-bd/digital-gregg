import HeadElement from "@components/HeadElement";
import { OnLoadTimeline } from "@views/Home/HeroSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { dgteamDynamicInfo } from "src/constant";
import { withoutLayoutUrls } from "src/constant/urls";
const Layout = dynamic(() => import('../components/Layout'));
import "../styles/globals.css";
gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }: AppProps) {

  // global
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as any,
    });
  }, [router.pathname, router.asPath]);

  // useeffect animation
  useEffect(() => {
    setTimeout(() => {
      OnLoadTimeline.play();
    }, 50);
  }, []);

  return (
    <>
      {/* seo head element */}
      <HeadElement
        subTitle={
          dgteamDynamicInfo?.filter(
            (title: any) =>
              title.url === router.asPath || title.url === router.route
          )[0]?.title
        }
      />

      {withoutLayoutUrls.includes(router.pathname) ? (
        <>
          <NextNProgress
            color="#C10206"
            startPosition={0.3}
            stopDelayMs={200}
            height={2}
            showOnShallow={true}
            options={{ easing: "ease", speed: 500, showSpinner: false }}
          />
          <Component {...pageProps} />{" "}
        </>
      ) : (
        <Layout>
          <NextNProgress
            color="#C10206"
            startPosition={0.3}
            stopDelayMs={200}
            height={2}
            showOnShallow={true}
            options={{ easing: "ease", speed: 500, showSpinner: false }}
          />
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
