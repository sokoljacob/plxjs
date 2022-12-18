import React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/App.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
