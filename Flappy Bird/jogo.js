console.log('Flappy Bird')

let frames = 0
const som_HIT = new Audio()
som_HIT.src = 'efeitos/efeitos_hit.wav'

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
function criaChao(){
    const Chao =  {
        spriteX: 0,
        spriteY: 610,
        largura: 224,
        altura: 112,
        x: 0,
        y: canvas.height - 112,
        atualiza(){
            const movimentoDoChao = 1
            const repeteEm = Chao.largura / 2
            const movimentacao = Chao.x - movimentoDoChao
            Chao.x = movimentacao % repeteEm

    
        },
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
    return Chao
    
}


function fazColisao(FlappyBird, Chao){
    const FlappyBirdY = FlappyBird.y + FlappyBird.altura 
    const ChaoY = Chao.y
    if(FlappyBirdY >= ChaoY){
        return true
    }
    return false

}



function criaFlappyBird(){
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
            if(fazColisao(FlappyBird, globais.Chao)){
                console.log('Fez colisao')
                som_HIT.play()
                
                setTimeout(() =>{
                    mudaParaTela(Telas.INICIO)
                }, 500)
                return  
            }
            FlappyBird.velocidade = FlappyBird.velocidade + FlappyBird.gravidade
            FlappyBird.y = FlappyBird.y + FlappyBird.velocidade
            
        },
        movimentos: [
            {spriteX: 0, spriteY: 0}, // asa para cima
            {spriteX: 0, spriteY: 26}, // asa no meio
            {spriteX: 0, spriteY: 52,} // asa para baixo
        ],
        frameAtual:0,
        atualizaOFrameAtual(){
            const intervaloDeFrames = 10
            const passouOIntervalo = frames % intervaloDeFrames === 0
            if(passouOIntervalo){
                const baseDoIncremento = 1
                const incremento = baseDoIncremento + FlappyBird.frameAtual
                const baseRepeticao = FlappyBird.movimentos.length
                FlappyBird.frameAtual =  incremento % baseRepeticao
            }
            console.log(frames)
            
        },
        desenha(){
            FlappyBird.atualizaOFrameAtual()
            const {spriteX, spriteY} = FlappyBird.movimentos[FlappyBird.frameAtual]
            contexto.drawImage(
                sprites,
                spriteX, spriteY, // Sprite x, Sprite y
                FlappyBird.largura, FlappyBird.altura, // Tamanho do recorte da Sprite
                FlappyBird.x, FlappyBird.y, // Posição dentro do Canvas
                FlappyBird.largura, FlappyBird.altura// Tamanho dentro do Canvas
                )
    
        }
    }
    return FlappyBird
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
const globais = {}
let telaAtiva = {}
function mudaParaTela(novaTela){
    telaAtiva = novaTela
    if(telaAtiva.inicializa){
    telaAtiva.inicializa()    
    }

    

}
const Telas = {
    INICIO: {
        inicializa(){
                globais.FlappyBird = criaFlappyBird()
                globais.Chao = criaChao()
        },
        desenha(){
            planoDeFundo.desenha()
            globais.Chao.desenha()
            globais.FlappyBird.desenha()
            mensagemGetReady.desenha()
        },

        click(){
            mudaParaTela(Telas.JOGO)
        },

        atualiza(){
            globais.Chao.atualiza()
            
        }
    }

}

Telas.JOGO = {
    desenha(){
    planoDeFundo.desenha()
    globais.Chao.desenha()
    globais.FlappyBird.desenha()
    },
    click(){
        globais.FlappyBird.pula()
    },
    atualiza(){
        globais.FlappyBird.atualiza()
        globais.Chao.atualiza()
    }
}



function loop(){
    telaAtiva.desenha()
    telaAtiva.atualiza()
    frames++
    

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
