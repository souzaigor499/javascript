console.log('Flappy Bird')

const sprites = new Image()
sprites.src = 'sprites.png'

const canvas = document.querySelector('canvas#game-canvas')
const contexto = canvas.getContext('2d')

// Plano de fundo

const planoDeFundo ={
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
        contexto.fillStyle = '#70c5ce'
        contexto.fillRect(0,0, canvas.width, canvas.height)
        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        )

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY,
            planoDeFundo.largura, planoDeFundo.altura,
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura,
        )

    }
    

}

// Chão

const Chao =  {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    desenha() {
        contexto.drawImage(
            sprites,
            Chao.spriteX, Chao.spriteY,
            Chao.largura, Chao.altura,
            Chao.x, Chao.y,
            Chao.largura, Chao.altura,
        )

        contexto.drawImage(
            sprites,
            Chao.spriteX, Chao.spriteY,
            Chao.largura, Chao.altura,
            (Chao.x + Chao.largura), Chao.y,
            Chao.largura, Chao.altura,
        )

    }
}

const FlappyBird = { 
    spriteX: 0,
    spriteY: 0,
    largura: 34,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,
    atualiza(){
        FlappyBird.velocidade = FlappyBird.velocidade + FlappyBird.gravidade
        FlappyBird.y = FlappyBird.y + FlappyBird.velocidade
        
    },
    desenha(){
        contexto.drawImage(
            sprites,
            FlappyBird.spriteX, FlappyBird.spriteY, // Sprite x, Sprite y
            FlappyBird.largura, FlappyBird.altura, // Tamanho do recorte da Sprite
            FlappyBird.x, FlappyBird.y, // Posição dentro do Canvas
            FlappyBird.largura, FlappyBird.altura// Tamanho dentro do Canvas
            )

    }
}


function loop(){
    FlappyBird.atualiza()
    planoDeFundo.desenha()
    Chao.desenha()
    FlappyBird.desenha()


    requestAnimationFrame(loop)
    
}

loop()
