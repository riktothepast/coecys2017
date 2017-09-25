const Phaser = require('phaser');
let assetsLoaded = false;

class LoadState extends Phaser.State {
  preload () {
    this.game.load.onLoadComplete.add(this.loadComplete, this);
    this.progressBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'progressBar');
    this.progressBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.progressBar);
    this.load.bitmapFont('font', 'assets/fonts/nokia16.png', 'assets/fonts/nokia16.xml');

    this.load.image('background', 'assets/sprites/background.png');
    this.load.image('middleBG', 'assets/sprites/middleBG.png');
    this.load.image('platform', 'assets/sprites/platform.png');

    // items
    this.load.spritesheet('coin', 'assets/sprites/coin.png', 16, 16, 4);
    this.load.spritesheet('enemy', 'assets/sprites/enemy.png', 16, 16, 3);
    // characters
    this.load.spritesheet('player', 'assets/sprites/player.png', 20, 20, 6);

    // test ui
    this.load.image('blueButton', 'assets/sprites/ui/blue_button09.png');
    this.load.image('greenButton', 'assets/sprites/ui/green_button09.png');
    this.load.image('yellowButton', 'assets/sprites/ui/yellow_button09.png');

    this.load.bitmapFont('nokia16', 'assets/fonts/nokia16.png', 'assets/fonts/nokia16.xml');
    this.game.load.start();
  }

  loadComplete () {
    console.log('Load Complete');
    this.state.start('TitleState');
  }
}

export default LoadState;
