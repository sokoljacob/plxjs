import Link from "next/link";
import { FC } from "react";

import styles from "./index.module.css";

export const HomeView: FC = ({}) => {
  return (
    <div className="home-content">
      <div className="left-home-image">
        <img id="homewhiteimg" src="/homebg-white.png"></img>
        <img id="homedarkimg" src="/homebg-dark.png"></img>
      </div>
      <div className="right-content">
        <h1 className="mb-5 text-3xl font-bold">What is Realms?</h1>
        <div className="indent font-bold">Realms is a 118 piece 1/1 Solana NFT collection. Holding a Realm is your entry into the community fund. The fund is used for a community curated collection of 1/1 art. Together, we will curate one of the most exclusive and sought Solana 1/1 collections…</div>
        <br />
        <br />
        <h1 className="mb-5 text-3xl font-bold">What goes into the community fund?</h1>
        <div className="indent font-bold">75% of all auction proceeds go into the Realms community fund. 50% of auction proceeds from collab Realms go into the fund. The other 50% goes to the collab artist.</div>
        <br />
        <br />
        <h1 className="mb-5 text-3xl font-bold">What art will be purchased with the community fund?</h1>
        <div className="indent font-bold">It's up to you! Together, we will discuss and vote on which art/artist we want to pursue. 1 Realm = 1 vote.</div>
        <br /><br />
      </div>
    </div>
  );
};
