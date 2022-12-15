import { FC, useState, useEffect } from "react";
import useSWR from "swr";
import { EyeOffIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from 'next/image';
import NextImage from 'next/image';

import { fetcher } from "utils/fetcher";

import PieceData from './pieces.json';
import { stringifyQuery } from "next/dist/server/server-route-utils";


type Props = {
  details: any;
  onSelect: (id: string) => void;
  onTokenDetailsFetched?: (props: any) => unknown;
};

export const NftCard: FC<Props> = ({
  details,
  onSelect,
  onTokenDetailsFetched = () => {},
}) => {
  const [fallbackImage, setFallbackImage] = useState(false);
  const { updateAuthority, mint } = details ?? {};
  const { name, uri } = details?.data ?? {};

  const { data, error } = useSWR(
    // uri || url ? getMetaUrl(details) : null,
    uri,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  // console.log("data", data);

  useEffect(() => {
    if (!error && !!data) {
      onTokenDetailsFetched(data);
    }
  }, [data, error]);

  const onImageError = () => setFallbackImage(true);
  const { image, description, animation_url } = data ?? {};

  function hidePiece(mint: any){
    let piece = PieceData.find((piece: any) => piece.id === mint); 
    if (piece?.hidden) return true;
    else return false;
  }

  function getPieceName(mint: any){
    let piece = PieceData.find((piece: any) => piece.id === mint); 
    if (piece?.nameoverride) return piece.nameoverride;
    else return name;
  }

  function getPieceDetails(mint: any){
      let piece = PieceData.find((piece: any) => piece.id === mint); 
      var details = "";
      if(piece?.artist){
        details += "Artist: ";
        if (piece?.artisttwitter) details += "<a href='https://www.twitter.com/" + piece?.artisttwitter + "' target='_blank'>";
        details += piece?.artist;
        if (piece?.artisttwitter) details += "</a>";
        if(piece?.artist2){
          details += " x ";
          if (piece?.artist2twitter) details += "<a href='https://www.twitter.com/" + piece?.artist2twitter + "' target='_blank'>";
          details += piece?.artist2;
          if (piece?.artist2twitter) details += "</a>";
        }
      } 
      if(piece?.collection){
        details += "<br />Collection: ";
        if (piece?.collectionurl) details += "<a href='" + piece?.collectionurl + "' target='_blank'>";
        details += piece?.collection;
        if (piece?.collectionurl) details += "</a>";
      }
      if(piece?.acqdate){
        details += "<br />Acquired: ";
        details += piece?.acqdate;
      }
      if(piece?.acqprice){
        details += "<br />Cost: ";
        details += piece?.acqprice;
      }
      return details;
  }

  function getGridImg(){
    let imgurl:string = image;
    if(imgurl.includes("ipfs.dweb.link")){
      return <NextImage id={mint} src={"/api/imageProxy?imageUrl=" + image} placeholder="blur" blurDataURL="/looky.gif" width={300} height={300} className="bg-gray-800 object-cover hover-zoom" onError={onImageError} />
    }
    else {
      return <Image id={mint} src={ image } onError={onImageError} placeholder="blur" blurDataURL="/looky.gif" width="300" height="300" className="bg-gray-800 object-cover hover-zoom" />
    }
  }

  function getCarouselImg(){
    if(animation_url) return <video controls><source src={animation_url} type="video/mp4" /></video>
    return <img src={ image } onError={onImageError} className="bg-gray-800 object-cover" />
    
  }

  if(!image || hidePiece(mint)){
    return ( null );
  } else {
    return (
      <div className="piece max-w-xs compact">
        <figure className="min-h-16 animation-pulse-color">
          {!fallbackImage || !error ? (
            <div>
              <div className="image-gridview">
                <a href={"/single?pid=" + mint}>
                  <div className="hover-zoom-wrapper">
                    {getGridImg()}
                  </div>
                </a>
              </div>
              <div className="image-carouselview">
                { getCarouselImg() }
              </div>
            </div>
          ) : (
            // Fallback when preview isn't available
            // This could be broken image, video, or audio
            <div className="w-auto h-48 flex items-center justify-center bg-gray-900 bg-opacity-40">
              <EyeOffIcon className="h-16 w-16 text-white-500" />
            </div>
          )}
        </figure>
        <div className="piece-body">
          <h2 className="text-center font-bold">{getPieceName(mint)}</h2>
          <div className="text-center" dangerouslySetInnerHTML={{ __html: getPieceDetails(mint) }} />
        </div>
      </div>
    );
  }
};
