export default class Hueco extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type){
        super(scene, x, y, type);
        scene.add.existing(this);
        this.setInteractive();
        this.setScale(0.04);
    }

    ConstruirTorretaNormal(){

    }
}