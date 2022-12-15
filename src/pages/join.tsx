import type { NextPage } from "next";
import Head from "next/head";
import { JoinRealms } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>THE REALMS DAO | HOME</title>
      </Head>
      <JoinRealms />
    </div>
  );
};

export default Home;
