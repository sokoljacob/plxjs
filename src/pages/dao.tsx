import type { NextPage } from "next";
import Head from "next/head";
import { DAO } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>THE REALMS DAO | DAO</title>
      </Head>
      <DAO />
    </div>
  );
};

export default Home;
