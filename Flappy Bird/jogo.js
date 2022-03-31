console.log('Flappy Bird')

let frames = 0
const som_HIT = new Audio()
som_HIT.src = 'efeitos/efeitos_hit.wav'

const sprites = new Image()
sprites.src = 'sprites.png'

const canvas = document.getElementById('game-canvas')
const contexto = canvas.getContext('2d')

// Plano de fundo

function criaPlanoDeFundo(){
    const planoDeFundo ={
        spriteX: 390,
        spriteY: 0,
        largura: 276,
        altura: 204,
        x: 0,
        y: canvas.height - 204,
        atualiza(){
            const movimentoDoChao = 0.2
            const repeteEm = planoDeFundo.largura / 2
            const movimentacao = planoDeFundo.x - movimentoDoChao
            planoDeFundo.x = movimentacao % repeteEm - 0.01
            

    
        },
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
                (planoDeFundo.x + planoDeFundo.largura) - 0.3, planoDeFundo.y,
                planoDeFundo.largura, planoDeFundo.altura,
            )

            
            
        },
        
    }
    return planoDeFundo
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
            Chao.x = movimentacao % repeteEm - 1

    
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
                som_HIT.play()
                
                
                    mudaParaTela(Telas.GAME_OVER)
                
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
//Mensagem game over

const mensagemGameOver = {
    sX: 134,
    sY: 153,
    w: 226,
    h: 200, 
    x: (canvas.width / 2) - 226 / 2,
    y: 50,
    desenha(){
        
        contexto.drawImage(
            sprites,
            mensagemGameOver.sX, mensagemGameOver.sY,
            mensagemGameOver.w, mensagemGameOver.h,
            mensagemGameOver.x, mensagemGameOver.y,
            mensagemGameOver.w, mensagemGameOver.h

        )
    }
}

function criaCanos(){
    const Canos = {
        largura: 52,
        altura: 400,
        chao: {
            spriteX: 0,
            spriteY: 169,
        },
        ceu: {
            spriteX: 52,
            spriteY: 169,
        },
        espaco: 80,
        desenha() {
            Canos.pares.forEach(function(par){
            const yRandom = par.y
            const espacamentoEntreCanos = 90
            const canoCeuX = par.x
            const canoCeuY = yRandom
            
                // [Cano do ceu]
            contexto.drawImage(
                sprites,
                Canos.ceu.spriteX, Canos.ceu.spriteY,
                Canos.largura, Canos.altura,
                canoCeuX, canoCeuY,
                Canos.largura, Canos.altura,
            )
            const canoChaoX = par.x
            const canoChaoY = Canos.altura + espacamentoEntreCanos + yRandom
            // [Cano do chão]
            contexto.drawImage(
                sprites,
                Canos.chao.spriteX, Canos.chao.spriteY,
                Canos.largura, Canos.altura,
                canoChaoX, canoChaoY,
                Canos.largura, Canos.altura,
            )
            par.canoCeu = {
                x: canoCeuX,
                y: Canos.altura + canoCeuY
            }
            par.canoChao = {
                x: canoChaoX,
                y: canoChaoY
            }

            })
            
        },
        temColisaoComOFlappyBird(par){
            const cabecaDoFlappy = globais.FlappyBird.y
            const peDoFlappy = globais.FlappyBird.y + globais.FlappyBird.altura
            if((globais.FlappyBird.x + globais.FlappyBird.largura) - 3 >= par.x){
                if(cabecaDoFlappy <= par.canoCeu.y){
                    return true
                }
                if(peDoFlappy >= par.canoChao.y){
                    return true       
                }
            }      
            return false
        },
        pares : [],
        atualiza(){
            const passou100Frames = frames % 100 === 0
            if(passou100Frames) {
                console.log('passou 100 frames')
                Canos.pares.push({
                    x: canvas.width,
                    y: -150 * (Math.random() + 1),
                })
            }
            Canos.pares.forEach(function(par){
                par.x = par.x -2

                if(Canos.temColisaoComOFlappyBird(par)){
                    console.log('voce perdeu')
                    som_HIT.play()
                    mudaParaTela(Telas.GAME_OVER)

                }

                if(par.x + Canos.largura <= 0 ){
                    Canos.pares.shift()
                }
            })

        }
    }
    return Canos
}

function criaPlacar(){
    const placar = {
        pontuacao: 0,
        melhorPontuacao: 0,
        desenha(){
            contexto.font ='35px "VT323"'
            contexto.textAlign = 'right'
            contexto.fillStyle ='White'
            contexto.fillText(`${placar.pontuacao}`, canvas.width - 10, 35)
            
        },
        desenhaResultado(){
            contexto.font ='35px "VT323"'
            contexto.textAlign = 'right'
            contexto.fillStyle ='#F4EEA5'
            contexto.fillText(`${placar.pontuacao}`, canvas.width - 80, 150)
            contexto.font ='35px "VT323"'
            contexto.textAlign = 'right'
            contexto.fillStyle ='#D7A84C'
            contexto.fillText(`${placar.pontuacao}`, canvas.width - 80, 148)
            
            
            
        },
         atualizaMelhorResultado(){
            for (placar.melhorPontuacao; placar.pontuacao > placar.melhorPontuacao; placar.melhorPontuacao = placar.pontuacao){

            }
             
        },
        

        desenhaMelhorResultado(){

                contexto.font ='35px "VT323"'
                contexto.textAlign = 'right'
                contexto.fillStyle ='#F4EEA5'
                contexto.fillText(`${placar.melhorPontuacao}`, canvas.width - 80, 190)
                contexto.font ='35px "VT323"'
                contexto.textAlign = 'right'
                contexto.fillStyle ='#D7A84C'
                contexto.fillText(`${placar.pontuacao}`, canvas.width - 80, 188)
                console.log(`${placar.melhorPontuacao}`)
            
            


            

        },
       
        atualiza(){
            const intervaloDeFrames = 60
            const passouOIntervalo = frames % intervaloDeFrames === 0
            if(passouOIntervalo){
                placar.pontuacao++
            }
            

        },

    }
    return placar
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
            globais.planoDeFundo = criaPlanoDeFundo()
                globais.FlappyBird = criaFlappyBird()
                globais.Chao = criaChao()
                globais.Canos = criaCanos()
        },
        desenha(){
            globais.planoDeFundo.desenha()
            globais.Canos.desenha()
            globais.Chao.desenha()
            globais.FlappyBird.desenha()
            mensagemGetReady.desenha()
        },

        click(){
            mudaParaTela(Telas.JOGO)
        },

        atualiza(){
            globais.Chao.atualiza()
            globais.planoDeFundo.atualiza()
            
            
        }
    }

}

Telas.JOGO = {
    inicializa(){
        globais.placar = criaPlacar()
    },
    desenha(){
    globais.planoDeFundo.desenha()
    globais.Canos.desenha()
    globais.Chao.desenha()
    globais.FlappyBird.desenha()
    globais.placar.desenha()
    
    },
    click(){
        globais.FlappyBird.pula()
    },
    atualiza(){
        globais.planoDeFundo.atualiza()
        globais.FlappyBird.atualiza()
        globais.Canos.atualiza()
        globais.Chao.atualiza()
        globais.placar.atualiza()
        
        
    }
}

    Telas.GAME_OVER = {
        desenha(){
            mensagemGameOver.desenha()
            globais.placar.desenhaResultado()
            globais.placar.desenhaMelhorResultado()
            
            
        },
        atualiza(){
            globais.placar.atualizaMelhorResultado()

        },
        click(){
            mudaParaTela(Telas.INICIO)
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
