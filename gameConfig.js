var game;

var config = {
    type: /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? Phaser.CANVAS : Phaser.AUTO,
    backgroundColor: "black",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 1000 },
            // debug: true,
        },
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Preload, Scene1PlayGame],
    audio: {
        disableWebAudio: true,
    },
    input: {
        activePointers: 3,
    },
    roundPixels: true,
    pixelArt: false,
};
game = new Phaser.Game(config);

