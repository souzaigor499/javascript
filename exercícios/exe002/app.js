var res = document.querySelector('div#res')
res.style.textAlign = 'center'
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.querySelector('input#txtano')
    if (formAno.value.length == 0 || formAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        if(fsex[0].checked){
            genero = 'um homem'
            if(idade>= 0 && idade < 11){
                //crianca
                img.setAttribute('src' , 'imagens/homembebe.png')
                
            } else if (idade < 21 ){
            //jovem
                img.setAttribute('src' , 'imagens/homemjovem.png')    
            }else if (idade < 50){
                //adulto
                img.setAttribute('src' , 'imagens/homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src' , 'imagens/homemvelho.png')
            }
        } else{
            genero ='uma mulher'
            if(idade >= 0 && idade < 11){
                //crainca
                img.setAttribute('src','imagens/mulherbebe.png')
                
            } else if (idade < 21 ){
            //jovem    
                img.setAttribute('src','imagens/mulherjovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','imagens/mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src','imagens/mulhervelha.png')
            }
        }
        res.innerHTML = `Você é ${genero} com ${idade} anos`
        res.appendChild(img) 
    }

}