
export default class cenaCarregamento extends Phaser.Scene {
    constructor(){
        super({
            key: 'CenaCarregamento'
        })

    }
    preload(){
        
        const larguraJogo = this.sys.canvas.width;

        const barraDeProgresso = this.add.graphics();

        // registra evento de progresso para atualizar a barra de progresso
        const larguraBarra = 0.8 * larguraJogo;
        this.load.on('progress', (value) => {
            barraDeProgresso.clear();
            // barra branca preenchida
            barraDeProgresso.fillStyle(0xffffff, 1);
            barraDeProgresso.fillRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra * value, 20);
            // contorno amarelo
            barraDeProgresso.lineStyle(4, 0xffff00, 1);
            barraDeProgresso.strokeRect((larguraJogo - larguraBarra) / 2, this.sys.game.config.height / 2, larguraBarra, 20);
        });
        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        })

        this.load.image('forest', 'imagens/forest.jpg');
        this.load.image('chao', 'imagens/chao.png');
        this.load.image('platform', 'imagens/platform.png');
        this.load.spritesheet('slime', 'imagens/slime-vermelha.png', { frameWidth: 24, frameHeight: 24 });
    }

    create(){

    }
    update(){
        
    }
}