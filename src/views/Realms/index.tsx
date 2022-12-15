import { FC } from "react";
import RealmsData from './realms.json';
import styles from "./index.module.css";
import Image from 'next/image'

export const Realms: FC = ({}) => {
  function getRealmTitle(realm : any){
    var title = "#" + realm.number;
    if (realm?.collabartist){
      title += " x ";
      if (realm?.collabartisttwitter) title += "<a href='https://www.twitter.com/" + realm?.collabartisttwitter+ "' target='_blank'>";
      title += realm?.collabartist;
      if (realm?.collabartisttwitter) title += "</a>";
    }
    return title;
  }

  function getRealmDetails(realm: any){
    
    var details = "";
    if(realm?.unreleased){
      details = "Unreleased";
    }
    else {
      if(realm?.owner){
        details = "Owned by: ";
        if (realm?.ownertwitter) details += "<a href='https://www.twitter.com/" + realm?.ownertwitter+ "' target='_blank'>";
        details += realm?.owner;
        if (realm?.ownertwitter) details += "</a>";
        if(realm?.ownerpersonalgal){
          details += "<br /><a href='/" + realm?.ownerpersonalgal + "'>";
          details += realm?.owner;
          details += "'s Personal Gallery";
          details += "</a>";
        }
      }
    }

    return details;
  }

  return (
    <div className="container mx-auto 2xl:px-0">
        <div className="hero min-h-16 p-0">
          <div className="text-center hero-content w-full">
            <div className="w-full">
              <h1 className="mb-5 text-3xl font-bold">
                REALMS
              </h1>
              <div className="my-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
                  {
                    RealmsData.map( realm => {
                      return (
                        <div className="max-w-xs compact" key={ realm.id }>
                          <figure className="min-h-16 animation-pulse-color">
                              <Image src={ "/realmthumbs/" + realm.thumb } placeholder="blur" blurDataURL="/looky.gif" width="300" height="300" className="bg-gray-800 object-cover" />
                          </figure>
                          <div className="piece-body">
                            <h2 className="piece-title text-center" dangerouslySetInnerHTML={{ __html: getRealmTitle(realm) }}></h2>
                            <div className="text-center" dangerouslySetInnerHTML={{ __html: getRealmDetails(realm) }} />
                          </div>
                        </div>
                      )
                    } )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};
