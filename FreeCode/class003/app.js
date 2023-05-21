
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
ulEL.className = "unlist"
let myLead = []
let valor = true

// localStorage.setItem("myLeads", "www.google.com")

localStorage.clear()
// console.log(localStorage.getItem("myLeads"))

function verificarCampo(){
   
    if(inputEl.value == ""){
        valor = false
    } else{
        valor = true
    }
    return valor
}



inputBtn.addEventListener("click", renderLeads)

function renderLeads(){
    
    if(verificarCampo()){
    myLead.push(inputEl.value) 
    inputEl.value = ""
    console.log(myLead)
    ulEL.textContent = ""
    for(let i in myLead){
        const a = document.createElement("a")
        a.className = "link"
        const li = document.createElement("li")
        li.className = "list"
        a.textContent = myLead[i]
        a.href = myLead[i]
        a.target = "_blank"
        li.appendChild(a)
        ulEL.appendChild(li)
        console.log(ulEL.textContent)
        
    }
    
    } else {
    window.alert('Conteúdo Inválido!')  
    }
}

