import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/Home.module.css";

// import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
