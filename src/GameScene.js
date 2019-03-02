import { Scene } from 'phaser'

class GameScene extends Scene {

  preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet(
        'dude', 'assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
  }

  create() {
    const sky = this.add.image(0, 0, 'sky')
    sky.setOrigin(0, 0)

    const star = this.add.image(400, 300, 'star')

  //   const logo = this.add.image(400, 150, 'logo')
  //   const message = this.add.text(100, 100, 'hello')
  //   this.input.on('pointerdown', () => {
  //     message.text = 'ouch'
  //   })
  //   this.input.on('pointerup', () => {
  //     message.text = 'hello'
  //   })
  //
  //   this.tweens.add({
  //       targets: logo,
  //       y: 450,
  //       duration: 2000,
  //       ease: 'Power2',
  //       yoyo: true,
  //       loop: -1
  //   });
  }
}

export default GameScene
