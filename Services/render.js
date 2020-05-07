const root = document.getElementById('root');

const LixoRenderEngine = {

  component: '',

  isComponent(){    
    return (typeof this.component).toString() === "object" ? true : false;
  },

  reset(){
    if( root.childElementCount ){
      root.removeChild(this.component);
    } else {
      console.log('Nothing to reset my dude');
    }
  },

  render(){ 
    if ( !this.isComponent() ){
      console.log('Nothing to render my dude');
    } else {
      root.appendChild(this.component);
    }
  },

  setComponent( component ){
    if( !this.isComponent() ){
      console.log('First time rendering');
      this.component = component;
    } else if ( this.component !== component ){
      this.reset();
      this.component = component;
    } else {
      console.log('Components are the same !!')
    }
  },

  renderScreen( screen ){
    this.setComponent(screen);
    this.render();
  }

};

export default LixoRenderEngine;