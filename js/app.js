document.addEventListener("DOMContentLoaded",()=>{
    let homme = document.querySelector(".homme")
    let section = document.querySelector(".main-grid")
    let body = document.querySelector("body")
    let femme = document.querySelector(".femme")
    
    homme.addEventListener("click",()=>{
        body.classList.toggle("bodyblur")
        document.location.href="https://hollyghost.fr/fr/11-homme";
    })
    femme.addEventListener("click",()=>{
        body.classList.toggle("bodyblur")
        document.location.href="https://hollyghost.fr/fr/3-femme";

    })
})