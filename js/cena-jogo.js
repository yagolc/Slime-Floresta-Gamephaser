import Jogador  from "./jogador.js";

export default class CenaJogo extends Phaser.Scene {
    constructor(){
        super({
            key: 'CenaJogo'
        })
    
        
    }
    preload(){
    }

    create(){
        const larguraJogo = this.sys.canvas.width;
        const alturaJogo = this.sys.canvas.height;
        const imagemFundo = this.add.image(larguraJogo/2, alturaJogo/2, 'forest');

        const plataformas = this.physics.add.staticGroup();
        plataformas.create(0, 184, 'chao').setOrigin(0, 0).refreshBody();
        plataformas.create(400 - 30, 240 - 56 - 34 - 34, 'platform').setOrigin(0, 0).refreshBody();
        plataformas.create(400 - 60, 240 - 56 -34, 'platform').setOrigin(0, 0).refreshBody();

        this.jogador = new Jogador(this);
        this.physics.add.collider(this.jogador.sprite, plataformas);

        this.teclas = this.input.keyboard.createCursorKeys();
    }
    update(){

        const jogador = this.jogador.sprite;

        if(this.teclas.left.isDown){
            jogador.setVelocityX(-160);
            jogador.setFlip(true, false)
            jogador.anims.play('esquerda', true);
        }
        else if (this.teclas.right.isDown){
            jogador.setVelocityX(160);
            jogador.setFlip(false, false)
            jogador.anims.play('direita', true);
        }else {
            jogador.setVelocityX(0);
            if(jogador.body.touching.down){
                jogador.anims.play('atoa');
            }
        }
        // seta para cima fazendo pular, mas só se estiver no chão
        if (this.teclas.up.isDown && jogador.body.touching.down) {
            jogador.setVelocityY(-100);
            jogador.anims.play('pulando')
        }
        


    }
}