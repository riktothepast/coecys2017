import BootState from 'states/BootState';
import LoadState from 'states/LoadState';
import GameState from 'states/GameState';
import TitleState from 'states/TitleState';

const Phaser = require('phaser');

class Game extends Phaser.Game {
  constructor () {
    super(160, 128, Phaser.AUTO, 'content', null, false, true);

    const { state } = this;

    state.add('BootState', BootState);
    state.add('LoadState', LoadState);
    state.add('GameState', GameState);
    state.add('TitleState', TitleState);
    state.start('BootState');
  }
}

new Game();
