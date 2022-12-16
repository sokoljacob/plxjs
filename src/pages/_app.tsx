import React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/App.css";

// set custom RPC server endpoint for the final website
// const endpoint = "https://explorer-api.devnet.solana.com";
// const endpoint = "http://127.0.0.1:8899";
//const endpoint = "https://ssc-dao.genesysgo.net";
const endpoint = "https://api.mainnet-beta.solana.com";


const openNav = () => {
  document.getElementById("nav")!.style.width = "250px";
};

const closeNav = () => {
  document.getElementById("nav")!.style.width = "0";
};

const setColorMode = () => {
  if('dark-mode' in localStorage) {
    localStorage.removeItem("dark-mode");
    document.documentElement.classList.remove('dark');
  } else {
    localStorage.setItem('dark-mode','yes')
    document.documentElement.classList.add('dark');
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                if('dark-mode' in localStorage){
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                `,
          }}
        ></script>
      </Head>
      <div className="navMenu">
        {/* <span id="modeBtn" onClick={setColorMode}>&#9728;&#xFE0E;</span>
        &nbsp;&nbsp;
        <span onClick={openNav}>&#9776;&#xFE0E;</span> */}
        <span id="modeBtn"><img onClick={setColorMode} /></span>
        &nbsp;&nbsp;
        <span id="navBtn"><img onClick={openNav} /></span>
      </div>
      <div id="nav" className="sidenav">
        <Link href=""><a onClick={closeNav} className="closebtn">&times;</a></Link>
        <Link href="/"><a className="navMenuOption" onClick={closeNav}>HOME</a></Link>
        <Link href="/allpieces"><a className="navMenuOption" onClick={closeNav}>ALL PIECES</a></Link>
      </div>
    </>
  );
}

export default MyApp;
