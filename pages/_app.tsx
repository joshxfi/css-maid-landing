import type { AppProps } from "next/app";
import { HeadHTML } from "../components/HeadHTML";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadHTML />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
