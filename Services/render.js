// Render
const root = document.getElementById("root");

const renderable = {};

renderable.component = '';

renderable.reset = function() {
  if(root.childElementCount){
    root.removeChild(renderable.component);
  }
}

renderable.setComponent = function(component) {
  if(component !== renderable.component){
    console.log('[LIXO]\tComponent was not clear, forcing reset');
    renderable.reset();
  }
    renderable.component = component;
}

renderable.render = function() {
  if (!renderable.component) {
    console.log("[LIXO]\tnothing to render my dude");
    return;
  }
    root.appendChild(renderable.component);
}

renderable.renderScreen = function(screen){
  renderable.setComponent(screen);
  renderable.render();
}

export default renderable;