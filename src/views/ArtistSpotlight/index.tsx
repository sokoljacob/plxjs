import Link from "next/link";
import { FC } from "react";

import styles from "./index.module.css";

export const ArtistSpotlight: FC = ({}) => {
  
  return (
    <div className="container mx-auto 2xl:px-0">
      <div className="hero min-h-16 p-0">
        <div className="text-center hero-content w-full">
          <div className="w-full">
            <h1 className="mb-5 text-3xl font-bold">
              ARTIST SPOTLIGHTS
            </h1>
            <div className="my-10">
              <h2 className="text-2xl font-bold"><Link href="https://twitter.com/therealmsdao/status/1511056997919121409"><a target="_blank">iamlaurel</a></Link></h2><br />
              <h2 className="text-2xl font-bold"><Link href="https://twitter.com/therealmsdao/status/1499107171203784705"><a target="_blank">Douglas McCurdy</a></Link></h2><br />
              <h2 className="text-2xl font-bold"><Link href="https://twitter.com/therealmsdao/status/1492487106484228103"><a target="_blank">Phib</a></Link></h2>
            </div>
          </div>
        </div>
    	</div>
    </div>
  );
};
