import LREngine from "./render.js";

function createFlowControl() {
  const storageEvent = new Event("storage");
  const getCurrentScreen = () => sessionStorage.getItem("currentScreen");
  let currentScreen = "";

  const allowedScreens = {};

  function allowFluxControl() {
    sessionStorage.clear();
    window.addEventListener("storage", () => {
      verifyScreenChange(screenChanged, screenDidntChange);
    });
  }

  function verifyScreenChange(onSucess, onFail) {
    return currentScreen !== getCurrentScreen() ? onSucess() : onFail();
  }

  function screenChanged() {
    const storedScreen = getCurrentScreen();

    if (allowedScreens[storedScreen]) {
      allowedScreens[storedScreen]();
      currentScreen = storedScreen;
      sessionStorage.removeItem("currentScreen");
    } else {
      console.log("ERROR - SCREEN " + storedScreen + " DOESN'T EXIST");
    }
  }

  function screenDidntChange() {
    console.log("Made changes in storage but it was not a screen change");
  }

  function pushScreen(screenName, screen) {
    allowedScreens[screenName] = () => {
      LREngine.renderScreen(screen);
    };
  }

  function linkTo(screenName) {
    sessionStorage.setItem("currentScreen", screenName);
    dispatchEvent(storageEvent);
  }

  return {
    allowFluxControl,
    pushScreen,
    linkTo,
  };
}

export default createFlowControl;
