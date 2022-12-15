import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

import styles from "./index.module.css";

export const DAO: FC = ({}) => {
  const { publicKey } = useWallet();
  
  return (
    <div className="home-content">
      <div className="left-home-image">
        <img id="homewhiteimg" src="/homebg-white.png"></img>
        <img id="homedarkimg" src="/homebg-dark.png"></img>
      </div>
      <div className="right-content">
        <h1 className="mb-5 text-3xl font-bold">Coming Soon...</h1>
      </div>
    </div>
  );
};
