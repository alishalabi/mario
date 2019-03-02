import { Scene } from 'phaser'

class GameScene extends Scene {

  preload() {
    this.load.image('logo', 'assets/logo.png')
  }

  create() {
    const logo = this.add.image(400, 150, 'logo')
    const message = this.add.text(100, 100, 'hello')
    this.input.on('pointerdown', () => {
      message.text = 'ouch'
    })
    this.input.on('pointerup', () => {
      message.text = 'hello'
    })
    
    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });
  }
}

export default GameScene
