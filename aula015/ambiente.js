let num  = [5, 8, 2 , 9, 3]
num.push(1)
num.push(99)
//num[5]= 7 alterar determinado indice
//num.push(12) ultima casa
//nu.length número de elementos
//num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num.sort()}`)
console.log(`Nosso primeiro valor do vetor é o ${num[0]}`)

num.sort()
pos = num.indexOf(4)
console.log(`O valor 9 está na posição ${num.indexOf(pos)}`)