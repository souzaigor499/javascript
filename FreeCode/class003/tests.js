let myLead = `["ww.google.com"]`
let valor = true

myLead = JSON.parse(myLead)
myLead.push("www.americanas.com")
myLead = JSON.stringify(myLead)
console.log(typeof myLead)