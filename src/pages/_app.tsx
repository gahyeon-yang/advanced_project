import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/Gnb/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </>
  );
}
