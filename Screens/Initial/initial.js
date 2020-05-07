function buildComponent() {

    const myScreen = document.createElement('DIV');
    myScreen.classList.add('initial-screen');
    myScreen.style.backgroundColor = 'purple';
    myScreen.style.width = '100vw';
    myScreen.style.height = '100vh';

    return myScreen;

}

const initialScreen = buildComponent();

export default initialScreen;