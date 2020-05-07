import createObserver from "../../Lib/observer.js";

function buildComponent(executeFlux) {

    //  Screen declaration
    const myScreen = document.createElement('DIV');
    myScreen.id = 'initial-screen';
    myScreen.style.backgroundColor = 'purple';
    myScreen.style.width = '100vw';
    myScreen.style.height = '100vh';

    //  Screen items declaration
    const callToActionButton = document.createElement('BUTTON');
    callToActionButton.classList.add('begin-button');
    callToActionButton.innerText = 'Play game';

    //  Observer fedido
    const beginObserver = createObserver(callToActionButton, 'click');
    beginObserver.subscribe(executeFlux)

    //  Assemble screen
    myScreen.appendChild(callToActionButton);

    return myScreen;

}

export default buildComponent;