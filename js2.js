
const lightbox = document.createElement("div");
lightbox.id = "lightbox";

document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");

images.forEach(item => {
    item.addEventListener("click" , eventobj =>{
        const img = document.createElement("img");
        img.src = item.src;
        lightbox.classList.toggle("active");
        if(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    })
})

lightbox.addEventListener("click" , e =>{
    if(e.target == e.currentTarget) {
        lightbox.classList.toggle("active")
    }
})



// I love javascript