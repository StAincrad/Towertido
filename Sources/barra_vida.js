export default class Barra extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, type){
        super(scene, x, y, type);
        this.x = x;
        this.y = y;
        scene.add.existing(this);
    }
}