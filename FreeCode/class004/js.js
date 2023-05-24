const imgs = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.webp"
]
const container = document.getElementById("container")

function desenharImagem(){
    for(let i in imgs){
        let img = document.createElement("img")
        img.className = "team-img"
        img.src = imgs[i]
        
        container.appendChild(img)

        

    }
    
}

desenharImagem()