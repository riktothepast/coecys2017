import { Sprite, Easing } from 'phaser';

class Enemy extends Sprite {
  constructor (game, center, asset, frame) {
    super(game, center.x, center.y, asset, frame);
    this.game = game;
    this.game.stage.addChild(this);
    this.game.physics.arcade.enable(this);
    this.animations.add('default', [0, 1, 2]);
    this.animations.play('default', 8, true);
  }

  update () {

  }
}

export default Enemy;
