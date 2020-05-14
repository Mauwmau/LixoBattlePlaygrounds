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

    //  Flow control
    const myFlow = createFlowControl();

    //  Observer fedido
    const beginObserver = createObserver(callToActionButton, 'click');
    beginObserver.subscribe(
        () => {
            myFlow.linkTo('selection');
        }
    )

    //  Assemble screen
    myScreen.appendChild(callToActionButton);

    return myScreen;

}

const initialScreen = buildComponent()

export default initialScreen;