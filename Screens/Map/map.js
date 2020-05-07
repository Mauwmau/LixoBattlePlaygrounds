function buildComponent() {

    const myScreen = document.createElement('DIV');
    myScreen.classList.add('map-screen');
    myScreen.style.backgroundColor = 'gray';
    myScreen.style.width = '100vw';
    myScreen.style.height = '100vh';

    return myScreen;

}

const mapScreen = buildComponent();

export default mapScreen;