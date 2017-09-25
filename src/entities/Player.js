const Phaser = require('phaser');
let spawnY;
let gravity = 600;
let jumpHeight = -200;
let damageTween;

class Player extends Phaser.Sprite {
  constructor (game, center, asset, frame) {
    super(game, center.x, center.y, asset, frame);
    this.game = game;
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;
    this.game.input.mouse.capture = true;
    this.jumpsLeft = this.jumpsLeft;
    this.canJump = true;
    this.score = 0;
    this.body.width = 20;
    this.body.height = 20;
    this.body.gravity.y = gravity;
    this.animations.add('walk', [0, 1, 2]);
    this.animations.add('jump', [3, 4, 5]);
    spawnY = center.y;
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update () {
    if (this.body.blocked.down) {
      this.body.velocity.y = 0;
      this.canJump = true;
      this.animations.play('walk', 10, true);
    }
    if ((this.game.input.activePointer.isDown || this.cursors.up.isDown) && this.canJump) {
      this.body.velocity.y = jumpHeight;
      this.canJump = false;
      this.animations.play('jump', 10, false);
    }
  }
}

export default Player;
