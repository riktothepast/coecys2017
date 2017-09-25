import Parallaxer from 'entities/Parallaxer';
import Player from 'entities/Player';
import Enemy from 'entities/Enemy';
import { State, Signal, Keyboard } from 'phaser';

let player;
let timer;
let currentTime;
let states;
let currentStage = 0;
let prettyTime;
let backgrounds;
let entities;
let enemies;
let overlays;
let worldBounds = {width: 0, height: 0};
const logicWorldBounds = {width: 160, height: 128};
const worldHeightDifferential = 14;
let scoreText;
const scoreTemplate = '0000';
let score = 0;

class GameState extends State {
  create () {
    worldBounds.width = logicWorldBounds.width;
    worldBounds.height = logicWorldBounds.height;
    this.game.world.setBounds(0, 0, worldBounds.width, worldBounds.height - worldHeightDifferential);
    const center = { x: this.game.world.centerX - 60, y: this.game.world.bounds.height };

    backgrounds = this.game.add.group();
    entities = this.game.add.group();
    overlays = this.game.add.group();
    scoreText = overlays.add(this.game.add.bitmapText(120, 2, 'nokia16', '0000', 16));
    enemies = this.game.add.group();

    const background = new Parallaxer(this.game, 0, 0, worldBounds.width, worldBounds.height, 'background');
    background.setSpeed(-0.5, 0);
    backgrounds.add(background);

    const middle = new Parallaxer(this.game, 0, 0, worldBounds.width, worldBounds.height, 'middleBG');
    middle.setSpeed(-1, 0);
    backgrounds.add(middle);

    const foreground = new Parallaxer(this.game, 0, 128 - this.game.cache.getImage('platform').height, worldBounds.width, this.game.cache.getImage('platform').height, 'platform');
    foreground.setSpeed(-1.5, 0);
    backgrounds.add(foreground);

    player = new Player(this.game, center, 'player');
    player.body.onCollide = new Signal();
    player.body.onCollide.add(this.Collisions, this);
    entities.add(player);

    timer = this.game.time.create(false);
    timer.loop(500, () => { 
      score++;
    }, this);
    timer.loop(1000, this.CreateEnemy, this);
    timer.start();
  }

  CreateEnemy() {
    const position = {
      x: worldBounds.width + this.game.rnd.pick([0, 10, 30, 60]),
      y: worldBounds.height - 30
    };
    const enemy = new Enemy(this.game, position, 'enemy');
    enemies.add(enemy);
  }

  Collisions() {
    console.log('collision!');
    this.state.start('TitleState');
  }

  update () {
    this.game.physics.arcade.collide(player, enemies);
    let paddedNumber = scoreTemplate.substring((score + '').length, 4) + score;
    scoreText.text = paddedNumber;
  }

 }

export default GameState;
