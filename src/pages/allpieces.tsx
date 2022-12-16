import type { NextPage } from "next";
import Head from "next/head";
import { AllPieces } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>PenguLove x JS Curation Contest | All Pieces</title>
      </Head>
      <AllPieces />
    </div>
  );
};

export default Home;
