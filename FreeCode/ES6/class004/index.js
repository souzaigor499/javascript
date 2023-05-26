//PROMISSES, FETCH
// const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'

// // function getTop100Campersr(){
// //     fetch(apiUrl)
// //     .then((r) => r.json)
// //     .then((json) => {
// //         console.log(json[0])
// //     }).catch((error) =>{
// //         console.log('failed')
// //     })
// // }
// async function getTop100Campersr(){
//     const response = await fetch(apiUrl)
//     const json = await response.json

//     console.log(json[0])

// }

// getTop100Campersr()

// function resolveAfter3Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved')
//         }, 3000);
//     })
// }

// // resolveAfter3Seconds().then((data) =>{
// //     console.log(data)
// // })

// async function getAsyncData() {
//     const result = await resolveAfter3Seconds()
//     console.log(result)
// }

// getAsyncData()

//SETS

const exampleSet = new Set([1,1,1,1,2,2,2,2])
exampleSet.add(3)
console.log(exampleSet.has(3))
console.log(exampleSet.delete(3))
console.log(exampleSet)