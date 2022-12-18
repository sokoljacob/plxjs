import Link from "next/link";
import { FC, useState} from "react";
import treeBrad from './treeBrad.json';
import treeKadense from './treeKadense.json';
import treeMooMoo from './treeMooMoo.json';
import treeQuincy from './treeQuincy.json';
import treeTopo from './treeTopo.json';
import treeAnon from './treeAnon.json';
import treeIntro from './treeIntro.json';
import treePF from './treePF.json';
import treeWiW from './treeWiW.json';
import treePFpieces from './treePFpieces.json';
import treeWiWpieces from './treeWiWpieces.json';
import treeFoyerReturn from './treeFoyerReturn.json';

let CharacterName = "";
let treeNode = 1;
let activeTree = treeAnon;
let PFViewed = false;
let WiWViewed = false;
let nextScene = "";

export const HomeView: FC = ({}) => {

  function refreshPage(){
    location.reload(); 
  }

  function characterSelected(character: string){
    switch (character) {
      case 'brad':
        CharacterName ="Brad";
        activeTree = treeBrad;
        break;
      case 'kadense':
        CharacterName ="Kadense";
        activeTree = treeKadense;
        break;
      case 'moomoo':
        CharacterName ="Papa MooMoo";
        activeTree = treeMooMoo;
        break;
      case 'quincy':
        CharacterName ="Quincy";
        activeTree = treeQuincy;
        break;
      case 'topo':
        CharacterName ="Topo";
        activeTree = treeTopo;
        break;
      default:
        CharacterName ="Anon";
        activeTree = treeAnon;
        break;
    }
    if (document != undefined) {
      document.getElementById("welcome")!.style.display = 'none';
      document.getElementById("gallery-scene")!.style.animation = '1.5s zoom-in';
      setTimeout(function() {
        document.getElementById("gallery-scene")!.style.backgroundImage = 'url("/imgs/scenes/foyer.png")';
        document.getElementById("gallery-scene")!.style.animation = '1.5s zoom-out';
        setTimeout(function() {
          document.getElementById("room")!.style.display = 'inline-block';
          document.getElementById("room-instructions")!.style.animation = '1.5s fadeIn';
          document.getElementById("room-instructions")!.style.display = 'inline-block';
          displayCharacterChainInfo(document.getElementById("room-instructions-label")!,document.getElementById("room-action1")!,document.getElementById("room-action2")!);
        }, 1800);
      }, 1000);
    }
  }

  function displayCharacterChainInfo(messageLabel: {
    [x: string]: any; innerText: string; 
}, action1Label: {
  [x: string]: any; innerText: string; 
}, action2Label: {
    [x: string]: any; innerText: string; 
}){
    let node = activeTree.find((node: any) => node.node === treeNode); 
    treeNode++;
    messageLabel.innerText = node!.message.toString();
    messageLabel.style.animation = '1.5s fadeIn';
    messageLabel.style.display = 'inline-block';
    setTimeout(function() {
      document.getElementById("room-actions-label")!.style.animation = '1.5s fadeIn';
      document.getElementById("room-actions-label")!.style.display = 'inline-block';
      setTimeout(function() {
        action1Label.innerText = node!.action1.toString();
        action1Label.style.animationDelay = "5000ms";
        action1Label.style.animation = '1.5s fadeIn';
        action1Label.style.display = 'inline-block';
        setTimeout(function() {
          let act2 = node!.action2.toString();
          if(act2.length == 0){
            action2Label.style.display = 'none';
          } else {
            action2Label.innerText = node!.action2.toString();
            action2Label.style.animationDelay = "6000ms";
            action2Label.style.animation = '1.5s fadeIn';
            action2Label.style.display = 'inline-block';
          }
        }, 800);
      }, 1200);
    }, 800);
  } 
  

  function actionClicked(selectedAction: string){
    if (document != undefined) {
      document.getElementById("room-action1")!.style.animation = '1s fadeOut';
      document.getElementById("room-action2")!.style.animation = '1s fadeOut';
      setTimeout(function() {
        document.getElementById("room-action1")!.style.display = 'none';
        document.getElementById("room-action2")!.style.display = 'none';
        document.getElementById("room-actions-label")!.style.animation = '1s fadeOut';
        setTimeout(function() {
          document.getElementById("room-actions-label")!.style.display = 'none';
          document.getElementById("room-instructions")!.style.animation = '1s fadeOut';
          setTimeout(function() {
            document.getElementById("room-instructions")!.style.display = 'none';
          }, 500);
        }, 500);
      }, 500);

      let timeout = 0;
      if (nextScene.length > 0){
        timeout = 4000;
        setTimeout(function() {
          document.getElementById("gallery-scene")!.style.animation = '1.5s zoom-in';
          setTimeout(function() {
            switch(nextScene){
              case "CHOICEDEPENDENT":
                switch (selectedAction) {
                  case "Perpendicular Facades":
                    document.getElementById("gallery-scene")!.style.backgroundImage = 'url("/imgs/scenes/photoghall.png")';
                    treeNode = 1;
                    setTree(nextScene, selectedAction);
                    PFViewed = true;
                    break;
                  case "Warmth in Winter":
                    document.getElementById("gallery-scene")!.style.backgroundImage = 'url("/imgs/scenes/abstracthall.png")';
                    treeNode = 1;
                    setTree(nextScene, selectedAction);
                    WiWViewed = true;
                    break;
                  default:
                    document.getElementById("gallery-scene")!.style.backgroundImage = 'url("/imgs/scenes/foyer.png")';
                    break;
                }
                break;
              case "wall":
                document.getElementById("gallery-scene")!.style.backgroundImage = 'url("/imgs/scenes/wall.png")';
                break;
              default:
                document.getElementById("gallery-scene")!.style.backgroundImage = 'url("/imgs/scenes/foyer.png")';
                break;
            }

            if(document.getElementById("gallery-scene")!.style.backgroundImage.includes("/imgs/scenes/foyer.png")){
              document.getElementById("room-wrapper")!.style.width = '60%';
              document.getElementById("room-wrapper")!.style.marginLeft = '30%';
              document.getElementById("room-image-wrapper")!.style.display = 'none';
            }

            document.getElementById("gallery-scene")!.style.animation = '1.5s zoom-out';
            nextScene = "";
          }, 1000);
        },2000);

      }
      setTimeout(function() {
        let node = activeTree.find((node: any) => node.node === treeNode); 
        treeNode++; 
        if (node!.changetree.length > 0){
          treeNode = 1;
          setTree(node!.changetree, selectedAction);
        }
        if (node!.changescene.length > 0){
          nextScene = node!.changescene;
        }else{
          nextScene = "";
        }

        setTimeout(function() {
          if(node!.image.toString().length > 0){
            document.getElementById("room-wrapper")!.style.display = 'inline';
            document.getElementById("room-wrapper")!.style.width = '30%';
            document.getElementById("room-wrapper")!.style.marginLeft = '0%';
            (document.getElementById("piece-image")! as HTMLImageElement).src = node!.image.split("|")[0];
            (document.getElementById("piece-hl")! as HTMLAnchorElement).href = node!.image.split("|")[1];
            document.getElementById("room-image-wrapper")!.style.animation = '0.5s fadeIn';
            document.getElementById("room-image-wrapper")!.style.display = 'inline';
          }
          document.getElementById("room-instructions")!.style.animation = '0.5s fadeIn';
          document.getElementById("room-instructions")!.style.display = 'inline-block';
          let msg = node!.message.toString();
          if(msg === "HISTORYDEPENDENT"){
            if (PFViewed && WiWViewed){
              msg = "Thank you for visiting both exhibitions! You may view either one again, or feel free to click the 'exit' icon to restart!"
            } else if(PFViewed){
              msg = "We hope you enjoyed the 'Perpendicular Facades' exhibition. You can view it again if you'd like, or feel free to proceed to viewing 'Warmth in Winter'!"
            } else if(WiWViewed){
              msg = "We hope you enjoyed the 'Warmth in Winter' exhibition. You can view it again if you'd like, or feel free to proceed to viewing 'Perpendicular Facades'!"
            }
          }
          document.getElementById("room-instructions-label")!.innerText = msg;
          document.getElementById("room-instructions-label")!.style.animation = '1.5s fadeIn';
          document.getElementById("room-instructions-label")!.style.display = 'inline-block';
          setTimeout(function() {
            document.getElementById("room-actions-label")!.style.animation = '1.5s fadeIn';
            document.getElementById("room-actions-label")!.style.display = 'inline-block';
            setTimeout(function() {
              document.getElementById("room-action1")!.innerText = node!.action1.toString();
              document.getElementById("room-action1")!.style.animationDelay = "5000ms";
              document.getElementById("room-action1")!.style.animation = '1.5s fadeIn';
              document.getElementById("room-action1")!.style.display = 'inline-block';
              setTimeout(function() {
                let act2 = node!.action2.toString();
                if(act2.length == 0){
                  document.getElementById("room-action2")!.style.display = 'none';
                } else {
                  document.getElementById("room-action2")!.innerText = node!.action2.toString();
                  document.getElementById("room-action2")!.style.animationDelay = "6000ms";
                  document.getElementById("room-action2")!.style.animation = '1.5s fadeIn';
                  document.getElementById("room-action2")!.style.display = 'inline-block';
                }
              }, 800);
            }, 1200);
          }, 800);
        },2000);
      }, timeout);
    }
  }

  function setTree(treeName: string, selectedAction: string){
    
      switch (treeName) {
        case 'treeBrad':
          activeTree = treeBrad;
          break;
        case 'treeKadense':
          activeTree = treeKadense;
          break;
        case 'treeMooMoo':
          activeTree = treeMooMoo;
          break;
        case 'treeQuincy':
          activeTree = treeQuincy;
          break;
        case 'treeTopo':
          activeTree = treeTopo;
          break;
        case 'treeIntro':
          activeTree = treeIntro;
          break; 
        case 'treeAnon':
          activeTree = treeAnon;
          break;
        case 'treePFpieces':
          activeTree = treePFpieces;
          break;
        case 'treeWiWpieces':
          activeTree = treeWiWpieces;
          break;
        case 'treeFoyerReturn':
          activeTree = treeFoyerReturn;
          break;
        case 'CHOICEDEPENDENT':
          switch (selectedAction) {
            case 'Perpendicular Facades':
              activeTree = treePF;
              break;
            case 'Warmth in Winter':
              activeTree = treeWiW;
              break;
          }
          break;
      }
  }


return (
    <div className="home-content">
          <div id="nav" className="topnav">
            <Link href="/allpieces"><a target="_blank"><span id="allPiecesButton"><img /></span></a></Link>
            <Link href="/"><a><span id="restartButton"><img onClick={refreshPage}/></span></a></Link>
          </div>
       <div className="text-center">
        <h1 className="text-1xl font-bold header siteHeader">PenguLove Curation Contest - Le Galerie de js</h1>
        <label id="testLabel"></label>
        <div className="gallery-content">
          <div id="gallery-scene">
            <br /><br />
            <div id="welcome">
              <div className="welcome-instructions">
                Welcome to js' Gallery Submission for the PenguLove Curation Contest! Please select your character:
              </div>
              <br />
              <div className="welcome-character-selection">
                <Link href="/"><a><span id="charBradButton"><img onClick={() => characterSelected("brad")} /></span></a></Link>
                <Link href="/"><a><span id="charKadenseButton"><img onClick={() => characterSelected("kadense")} /></span></a></Link>
                <Link href="/"><a><span id="charMooMooButton"><img onClick={() => characterSelected("moomoo")} /></span></a></Link>
                <Link href="/"><a><span id="charQuincyButton"><img onClick={() => characterSelected("quincy")} /></span></a></Link>
                <Link href="/"><a><span id="charTopoButton"><img onClick={() => characterSelected("topo")} /></span></a></Link>
                <Link href="/"><a><span id="charAnonButton"><img onClick={() => characterSelected("anon")} /></span></a></Link>
              </div>
              <label id="CharacterNameLabel"></label>
            </div>  
            <div id="room">
              <div id="room-image-wrapper">
                <a href="" id="piece-hl" target="_blank">
                  <img id="piece-image"></img>
                </a>
              </div>
              <div id="room-wrapper">
                <div className="text-left">
                  <div id="room-instructions">
                    <label id="room-instructions-label"></label>
                  </div>
                  <br /><br />
                  <label id="room-actions-label">Actions:</label>
                  <div className="room-actions">
                    <label id="room-action1" onClick={() => actionClicked(document.getElementById("room-action1")!.innerText)}></label>
                    <label id="room-action2" onClick={() => actionClicked(document.getElementById("room-action2")!.innerText)}></label>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};
