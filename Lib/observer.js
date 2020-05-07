function createObserver(component, listener){

    // Passando funções como observadores

    const state = {
        observers: []
    }

    function subscribe(observerFunction){
        state.observers.push(observerFunction);
    }

    function unsubscribe(observerFunction){
        const toRemove = state.observers.indexOf(observerFunction);
        state.observers.splice(toRemove);
    }

    function notify(){
        state.observers.forEach( observerFunction => {
            observerFunction();
        });
    }

    component.addEventListener(listener, notify);

    return {
        subscribe
    };
}

export default createObserver;