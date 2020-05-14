import LREngine from "./render.js";

import initialScreen from "../Screens/Initial/initial.js";
import selectionScreen from "../Screens/Selection/selection.js";
import mapScreen from "../Screens/Map/map.js";
import battleScreen from "../Screens/Battle/battle.js";

//    - Decided, not going to use paths, usign session storage instead
//  Let's go to work

function createFlowControl() {
  // - - - Resources - - -

  let currentScreenName = "initial";
  let currentScreen = initialScreen;

  // const storageEvent = new Event("storage");

  const allowedScreens = {
    initial() {
      currentScreen = initialScreen;
    },
    selection() {
      currentScreen = selectionScreen;
    },
    map() {
      currentScreen = mapScreen;
    },
    battle() {
      currentScreen = battleScreen;
    },
  };

  // - - - Methods - - -

  function allowScreenFlux() {
    LREngine.renderScreen(currentScreen);

    window.addEventListener("storage", () => {
      verifyScreenChange(
        () => {
          console.log("Sucesso");
          switchScreen();
        }, // Screen is different

        () => {
          console.log("Falha");
        } // Screen is same
      );
    });
  }

  function switchScreen() {
    const wantedScreenName = sessionStorage.getItem("currentScreenName");
    if (allowedScreens[wantedScreenName]) {
      allowedScreens[wantedScreenName]();
      LREngine.renderScreen(currentScreen);
      currentScreenName = wantedScreenName;
      // sessionStorage.removeItem('currentScreen');
    } else {
      console.log('no screen named ' + wantedScreenName);
    }
  }

  function verifyScreenChange(onSucess, onFail) {
    if (sessionStorage.getItem("currentScreenName")) {
      return sessionStorage.getItem("currentScreenName") !== currentScreenName
        ? onSucess() && true
        : onFail() && false;
    } else {
      console.log("There is no screen");
    }
    return false;
  }

  return {
    allowScreenFlux,
  };
}

export default createFlowControl;
