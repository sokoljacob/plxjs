import { FC, useState } from "react";
import { useWalletNfts, NftTokenAccount } from "@nfteyez/sol-rayz-react";
import { useConnection } from "@solana/wallet-adapter-react";

import { Loader } from "components";
import { NftCard } from "./NftCard";
import styles from "./index.module.css";
import PieceData from './pieces.json';
const walletPublicKey = "ATh5Q48kxcqYTsL9XJmxSMUKyGfN8gaq4J5DCKpz8EWF";

export const CommunityGallery: FC = ({}) => {
  const { connection } = useConnection();
  const [walletToParsePublicKey] = useState<string>(walletPublicKey);

  const { nfts, isLoading, error } = useWalletNfts({
    publicAddress: walletToParsePublicKey,
    connection,
  });

  function detailsChanged(e: any) {
    if (e.target.checked){
      var pbs = document.querySelectorAll(".piece-body");
      pbs.forEach(function (pb){
        pb.className = "piece-body-hidden";
      })
    } else {
      var pbs = document.querySelectorAll(".piece-body-hidden");
      pbs.forEach(function (pb){
        pb.className = "piece-body";
      })
    }
  };

  function viewChanged(e: any){
    if (e.target.checked){
      var ps = document.querySelectorAll(".piece");
      let i = 0;
      ps.forEach(function (p){
        if (i===0) p.className = "piece-single";
        else p.className = "piece-hidden";
        p.className += " piece-num-" + i;
        if (i === ps.length - 1) p.className += " piece-last";
        i++;
      })
      document.getElementById("carouselLeft")!.className = "carousel-left";
      document.getElementById("carouselRight")!.className = "carousel-right";
      document.getElementById("pieces-container")!.className = "grid grid-cols-1 items-start pieces-container-single";
    } else {
      var phs = document.querySelectorAll(".piece-hidden");
      phs.forEach(function (ph){
        ph.className = "piece";
      })
      var pss = document.querySelectorAll(".piece-single");
      pss.forEach(function (ps){
        ps.className = "piece";
      })
      document.getElementById("carouselLeft")!.className = "carousel-left-hidden";
      document.getElementById("carouselRight")!.className = "carousel-right-hidden";
      document.getElementById("pieces-container")!.className = "grid grid-cols-2 md:grid-cols-4 gap-4 items-start";
    }
  }


  function carouselRotateLeft(e: any){
    var pieces = document.getElementsByClassName("piece-single");
    if (pieces){
      var currentPiece = pieces[0]
      var nextPiece;
      if (currentPiece.className.endsWith("piece-num-0")){
        nextPiece = document.getElementsByClassName("piece-last")[0];
      } else {
        var nameArr = currentPiece.className.replace(" piece-last", "").split('-');
        var num = parseInt(nameArr[nameArr.length - 1]);
        num = num-1;
        nextPiece = document.getElementsByClassName("piece-num-" + num.toString())[0];
      }
      currentPiece.className = currentPiece.className.replace("piece-single", "piece-hidden");
      nextPiece.className = nextPiece.className.replace("piece-hidden", "piece-single");
    } 
  }

  function carouselRotateRight(e: any){
    var pieces = document.getElementsByClassName("piece-single");
    if (pieces){
      var currentPiece = pieces[0]
      var nextPiece;
      if (currentPiece.className.endsWith("piece-last")){
        nextPiece = document.getElementsByClassName("piece-num-0")[0];
      } else {
        var nameArr = currentPiece.className.replace(" piece-last", "").split('-');
        var num = parseInt(nameArr[nameArr.length - 1]);
        num = num+1;
        nextPiece = document.getElementsByClassName("piece-num-" + num.toString())[0];
      }
      currentPiece.className = currentPiece.className.replace("piece-single", "piece-hidden");
      nextPiece.className = nextPiece.className.replace("piece-hidden", "piece-single");
    } 
  }

  // console.log("nfts", nfts);

  return (
      <div className="container mx-auto 2xl:px-0">
        <div className="hero min-h-16 p-0">
          <div className="text-center hero-content w-full">
            <div className="w-full">
              <h1 className="mb-5 text-3xl font-bold">
                COMMUNITY GALLERY
              </h1>
              <div>
                <div className="flex items-center justify-center w-full mb-12">
                  <label htmlFor="toggleDetails" className="flex items-center cursor-pointer mr-20">
                    <div className="mr-2">
                        <img className="galleryDetailsShowToggleImage" alt="Details" />
                    </div>
                    <div className="relative">
                      <input type="checkbox" name="toggleDets" id="toggleDetails" className="sr-only" onChange={detailsChanged} />
                      <div className="block toggleBG w-14 h-8 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                    </div>
                    <div className="ml-2">
                      <img className="galleryDetailsHideToggleImage" alt="Hide" />
                    </div>
                  </label>
                  <label htmlFor="toggleView" className="flex items-center cursor-pointer ml-20">
                    <div className="mr-2">
                      <img className="galleryGridToggleImage" alt="Grid" />
                    </div>
                    <div className="relative">
                      <input type="checkbox" id="toggleView" className="sr-only" onChange={viewChanged} />
                      <div className="block toggleBG w-14 h-8 rounded-full"></div>
                      <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                    </div>
                    <div className="ml-2">
                      <img className="gallerySingleToggleImage" alt="Single" />
                    </div>
                  </label>
                </div>
              </div>
              <div className="my-10">
                <div className="carousel-left-hidden" id="carouselLeft">
                  <img className="carousel-left-arrow" onClick={carouselRotateLeft} />
                </div>
                {error ? (
                  <div>
                    <h1>Error Occured</h1>
                    {(error as any)?.message}
                  </div>
                ) : null}

                {!error && isLoading ? (
                  <div>
                    <Loader />
                  </div>
                ) : (
                  <NftList nfts={nfts} error={error} />
                )}
                <div className="carousel-right-hidden" id="carouselRight">
                  <img className="carousel-right-arrow" onClick={carouselRotateRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

type NftListProps = {
  nfts: NftTokenAccount[];
  error?: Error;
};

const NftList = ({ nfts, error }: NftListProps) => {
  if (error) {
    return null;
  }

  if (!nfts?.length) {
    return (
      <div className="text-center text-2xl pt-16">
        No NFTs found
      </div>
    );
  } else {
    var orderedNfts:NftTokenAccount[] = new Array(nfts.length);
    //want pieces listed in reverse acq order. if no piece data, list it at beginning
    var nextAvail = 0;
    for (var i = 0 ; i < nfts.length; i++){
      let piece = PieceData.find((piece: any) => piece.id === nfts[i].mint); 
      if(piece?.acqnum){
        orderedNfts[nfts.length - piece?.acqnum] = nfts[i];
      } else {
        orderedNfts[nextAvail] = nfts[i];
        nextAvail++;
      }
    }
  }
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start" id="pieces-container">
      {orderedNfts?.map((nft) => (
        <NftCard key={nft.mint} details={nft} onSelect={() => {}} />
      ))}
    </div>
    // <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start" id="pieces-container">
    //   {nfts?.map((nft) => (
    //     <NftCard key={nft.mint} details={nft} onSelect={() => {}} />
    //   ))}
    // </div>
  );
};
