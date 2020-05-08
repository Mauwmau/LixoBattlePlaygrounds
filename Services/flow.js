import LREngine from './render.js';

import initialScreen from '../Screens/Initial/initial.js';
import selectionScreen from '../Screens/Selection/selection.js';
import mapScreen from '../Screens/Map/map.js';

//const validPaths = ['/', '/selection', '/map'];

export default function flow(){

    // location.pathname = '/'

    const acceptedPaths = {
        '/'(){
            const init = initialScreen();
            LREngine.setComponent(init);
            LREngine.render();
        },

        '/selection'(){
            LREngine.setComponent(selectionScreen);
            LREngine.render();
        },

        '/map'(){
            LREngine.setComponent(mapScreen);
            LREngine.render();
        }
    }

    window.addEventListener('popstate', (event) => {
        if(acceptedPaths[location.pathname]){
            acceptedPaths[location.pathname]();
        } else {
            location.pathname = '/';
        }
    });

    // history.pushState({}, '', '/');
    // const popEvent = new Event('popstate');
    // window.dispatchEvent(popEvent);

    // history.pushState({}, '', '/selection');
    // window.dispatchEvent(popEvent);
    // console.log(location.pathname);
    //const myFunct = acceptedPaths[location.pathname];
    //myFunct();

}