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

  }

  CreateEnemy() {

  }

  Collisions() {

  }

  update () {

  }

 }

export default GameState;
