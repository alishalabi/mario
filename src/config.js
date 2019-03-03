import Phaser from 'phaser'
import GameScene from './GameScene.js'
import PreloadScene from './PreloadScene.js'

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [PreloadScene, GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },
}



export { config }
