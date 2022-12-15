import type { NextPage } from "next";
import Head from "next/head";
import { Realms } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>THE REALMS DAO | REALMS</title>
      </Head>
      <Realms />
    </div>
  );
};

export default Home;
