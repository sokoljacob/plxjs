import type { NextPage } from "next";
import Head from "next/head";
import { ArtistSpotlight } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>THE REALMS DAO | ARTIST SPOTLIGHT</title>
      </Head>
      <ArtistSpotlight />
    </div>
  );
};

export default Home;
