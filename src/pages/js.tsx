import type { NextPage } from "next";
import Head from "next/head";
import { JS } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>THE REALMS DAO | JS</title>
      </Head>
      <JS />
    </div>
  );
};

export default Home;
