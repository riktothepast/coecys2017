const Phaser = require('phaser');
let assetsLoaded = false;

class LoadState extends Phaser.State {
  preload () {
    
  }

  loadComplete () {
    console.log('Load Complete');
    this.state.start('TitleState');
  }
}

export default LoadState;
