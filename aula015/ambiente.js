let num  = []
num.push(1)
num.push(99)
num.push(33)
//num[5]= 7 alterar determinado indice
//num.push(12) ultima casa
//num.length número de elementos
//num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num.sort()}`)
console.log(`Nosso primeiro valor do vetor é o ${num[0]}`)

num.sort()
console.log(num)
pos = num.indexOf(4)
console.log(`O valor 9 está na posição ${num.indexOf(pos)}`)