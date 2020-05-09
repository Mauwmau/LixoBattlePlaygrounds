import createObserver from "../../Lib/observer.js";
import createFlowControl from '../../Services/flow.js';

function buildComponent() {

    //  Screen declaration
    const myScreen = document.createElement('DIV');
    myScreen.id = 'initial-screen';

    //  Screen items declaration
    const callToActionButton = document.createElement('BUTTON');
    callToActionButton.classList.add('begin-button');
    callToActionButton.innerText = 'Play game';

    //  Observer fedido
    const beginObserver = createObserver(callToActionButton, 'click');
    beginObserver.subscribe(
        () => {
            const myFlow = createFlowControl();
            myFlow.triggerPathChange('/selection');
        }
    )

    //  Assemble screen
    myScreen.appendChild(callToActionButton);

    return myScreen;

}

export default buildComponent;