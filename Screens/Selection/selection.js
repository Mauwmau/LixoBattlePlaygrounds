function buildComponent() {

    const myScreen = document.createElement('DIV');
    myScreen.classList.add('selection-screen');
    myScreen.style.backgroundColor = 'green';
    myScreen.style.width = '100vw';
    myScreen.style.height = '100vh';

    return myScreen;

}

const selectionScreen = buildComponent();

export default selectionScreen;