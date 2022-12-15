import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.css";

export const JoinRealms: FC = ({}) => {
  return (
    <div className="join-content">
      	<div className="left-content">
			<h1 className="mb-5 text-3xl font-bold">How do I join?</h1>
			<div className="indent font-bold">
				New Realms are released each week until the 118 piece collection is complete. Auctions take place on <Link href="https://exchange.art/collections/Realms"><a target="_blank">exchange.art</a></Link>.
				<br /><br />
				In addition, Realms may occasionally be listed for secondary sale on <Link href="https://exchange.art/collections/Realms"><a target="_blank">exchange.art</a></Link> or you can make an offer to an existing Realms holder. Keep your eyes peeled!
				<br /><br />
				Follow us on Twitter - <Link href="https://twitter.com/TheRealmsDAO"><a target="_blank">@TheRealmsDao</a></Link> - to stay up to date.
				<br /><br />
				<Link href="https://discord.gg/9v3pAw6J"><a target="_blank">Join our Discord</a></Link> if you have any questions or want to network with the Realms holders. We won't bite!
			</div>
			<br /><br />
		</div>
		<div className="right-join-image">
			<img id="joinwhiteimg" src="/joinbg-white.png"></img>
			<img id="joindarkimg" src="/joinbg-dark.png"></img>
      	</div>
    </div>
  );
};
