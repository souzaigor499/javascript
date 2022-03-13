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

function fazColisao(FlappyBird, Chao){
    const FlappyBirdY = FlappyBird.y + FlappyBird.altura 
    const ChaoY = Chao.y
    if(FlappyBirdY >= ChaoY){
        return true
    }
    return false

}




const FlappyBird = { 
    spriteX: 0,
    spriteY: 0,
    largura: 34,
    altura: 24,
    x: 10,
    y: 50,
    pulo: 4.6,
    pula(){
        FlappyBird.velocidade = - FlappyBird.pulo
    },
    gravidade: 0.25,
    velocidade: 0,
    atualiza(){
        if(fazColisao(FlappyBird, Chao)){
            console.log('Fez colisao')
            mudaParaTela(Telas.INICIO)
            
            return
            
            
        }
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

// Mensagem Get Ready

const mensagemGetReady = {
    sX: 134,
    sY: 0,
    w: 174,
    h: 152, 
    x: (canvas.width / 2) - 174 / 2,
    y: 50,
    desenha(){
        contexto.drawImage(
            sprites,
            mensagemGetReady.sX, mensagemGetReady.sY,
            mensagemGetReady.w, mensagemGetReady.h,
            mensagemGetReady.x, mensagemGetReady.y,
            mensagemGetReady.w, mensagemGetReady.h

        )
    }
}

//Telas
let telaAtiva = {}
function mudaParaTela(novaTela){
    telaAtiva = novaTela

}
const Telas = {
    INICIO: {
        desenha(){
            planoDeFundo.desenha()
            Chao.desenha()
            FlappyBird.desenha()
            mensagemGetReady.desenha()
        },

        click(){
            mudaParaTela(Telas.JOGO)
        },

        atualiza(){
            
        }
    }

}

Telas.JOGO = {
    desenha(){
    planoDeFundo.desenha()
    Chao.desenha()
    FlappyBird.desenha()
    },
    click(){
        FlappyBird.pula()
    },
    atualiza(){
        FlappyBird.atualiza()
    }
}



function loop(){
    telaAtiva.desenha()
    telaAtiva.atualiza()
    

    requestAnimationFrame(loop)
    
}

window.addEventListener('click', function(){
    if(telaAtiva.click){
    telaAtiva.click()
    }
}

)

mudaParaTela(Telas.INICIO)
loop()
