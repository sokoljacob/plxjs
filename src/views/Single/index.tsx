import Link from "next/link";
import { useRouter } from 'next/router';
import * as web3 from '@solana/web3.js';
import { useConnection } from "@solana/wallet-adapter-react";


export const Single = () => {
  const router = useRouter()
  const pid = router.query.pid || []

  const { connection } = useConnection();

const accountInfo = connection.getAccountInfoAndContext(
new web3.PublicKey(pid)
);

console.log("pinfo",accountInfo);



  return (
    <div className="container mx-auto 2xl:px-0">
        <div className="hero min-h-16 p-0">
          <div className="text-center hero-content w-full">
            <div className="w-full">
              <h1 className="mb-5 text-3xl font-bold">
                PIECE NAME
              </h1>
              <div className="my-10">
                pid: {pid}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
