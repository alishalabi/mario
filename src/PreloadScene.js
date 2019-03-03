import { Scene } from 'phaser'

class PreloadScene extends Scene {

  constructor() {
    super('preload') // "Preload" is the key for the scene
  }

  preload() {
    this.load.image('logo', 'assets/logo.png')
  }

  create() {
    this.add.image(400, 300, 'logo')
    this.input.on('pointerdown', () => {
      this.scene.start('game')
    })
  }

}

export default PreloadScene
