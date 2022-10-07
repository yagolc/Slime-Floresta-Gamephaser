
import cenaCarregamento from './cena-carregamento.js';
import cenaJogo from './cena-jogo.js';


const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 400,
        height: 240
    },
    parent: 'jogo-slime-floresta',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 100
            },
            debug: false
        }
    },
    pixelArt: true,
    scene: [
        cenaCarregamento,
        cenaJogo
    ]


}
const jogo = new Phaser.Game(config);