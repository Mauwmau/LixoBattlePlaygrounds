import LREngine from "./render.js";

import initialScreen from "../Screens/Initial/initial.js";
import selectionScreen from "../Screens/Selection/selection.js";
import mapScreen from "../Screens/Map/map.js";
import battleScreen from "../Screens/Battle/battle.js";

//  TODO: Decide if using browser paths or not

function createFlowControl() {

  // - - - Module resources - - -

  const init = initialScreen();

  const acceptedPaths = {
    "/"() {
      LREngine.renderScreen(init);
    },

    "/selection"() {
      LREngine.renderScreen(selectionScreen);
    },

    "/map"() {
      LREngine.renderScreen(mapScreen);
    },

    "/battle"(){
      LREngine.renderScreen(battleScreen);
    }
  };

  const pathChangeEvent = new Event("popstate");


  // - - - Module methods - - -

  function startCheckingPath() {

    // Load initial screen
    window.addEventListener("load", () => {
      LREngine.renderScreen(init);
    })

    window.addEventListener("popstate", (event) => {
      if (acceptedPaths[location.pathname]) {
        acceptedPaths[location.pathname]();
      } else {
        console.log('Unknown path x_x');
      }
    });

  }

  function triggerPathChange(path){
    window.history.pushState({}, '', path);
    window.dispatchEvent(pathChangeEvent);
  }

  return {
    startCheckingPath,
    triggerPathChange
  }

}

export default createFlowControl;
