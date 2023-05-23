// localStorage.clear()
let myLead = []
let valor = true
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const tabs = [{url: "https://www.google.com"}]
renderLocal()

tabBtn.addEventListener("click", function(){
    
    myLead.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLead))
    ulEL.textContent = ""
    render(myLead)
})
ulEL.className = "unlist"

function renderLocal(){
if(leadsFromLocalStorage){
    myLead = leadsFromLocalStorage
    render(myLead)
}
}


function deleteAll(){
    localStorage.clear()
    myLead = []
    ulEL.textContent = ""
}

function render(leads){
    
    if(inputEl.value != "") {
    leads.push(inputEl.value) 
    inputEl.value = ""
    ulEL.textContent = ""
    }
    
    for(let i in leads){
            const a = document.createElement("a")
            a.className = "link"
            const li = document.createElement("li")
            li.className = "list"
            a.textContent = leads[i]
            a.href = leads[i]
            a.target = "_blank"
            li.appendChild(a)
            ulEL.appendChild(li)
            localStorage.setItem("myLeads", JSON.stringify(leads))
            
            }
        console.log(leads)
}

delBtn.addEventListener("dblclick", deleteAll)

inputBtn.addEventListener("click",function(){
    if(inputEl.value != "") {
        render(myLead)
    }
    else{
        window.alert("conteudo invalido")
    }
})




// localStorage.setItem("myLeads", "www.google.com")
// console.log(localStorage.getItem("myLeads"))












