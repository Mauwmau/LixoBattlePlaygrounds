function buildComponent() {

    const myScreen = document.createElement('DIV');
    myScreen.classList.add('battle-screen');
    myScreen.style.backgroundColor = 'black';
    myScreen.style.width = '100vw';
    myScreen.style.height = '100vh';

    return myScreen;

}

const battleScreen = buildComponent();

export default battleScreen;