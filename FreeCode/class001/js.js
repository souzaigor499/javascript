



var count = 0
function adicionar(){
    count++
    document.getElementById('count-el').textContent = count

}
function save(){
    let save = document.getElementById('save')
    save.textContent = save.textContent  + count + ' - '
    count = 0
    document.getElementById('count-el').textContent = count
    
   
}

