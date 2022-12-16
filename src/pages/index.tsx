import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>PenguLove x JS Curation Contest</title>
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
