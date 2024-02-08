const linksBtns = document.querySelectorAll(".linksBtn")

window.addEventListener("load", (e)=>{
    if (navigator.userAgent.indexOf("Chrome") > -1) {
        document.querySelectorAll(".linksBtn").forEach(link=>{
            link.style.transform = "rotate(180deg)"
        })
    }
})


let glitchAnimation;
linksBtns.forEach(btn=>{
    btn.addEventListener("mouseover", (e)=>{
       document.querySelector("#hero-image").classList.add("animate_glitch") 
    })

    btn.addEventListener("mouseout", (e)=>{
        document.querySelector("#hero-image").classList.remove("animate_glitch")
    })

    btn.addEventListener("click", (e)=>{
        e.target.classList.add(`onClick_${e.target.id}`)
    })
})


const myModal = document.getElementById('aboutModal')
const modalsLinksList = document.querySelectorAll('.modalLink')

// myModal.addEventListener('shown.bs.modal', () => {
//     console.log("open")
// })

modalsLinksList.forEach(modal=>{
    modal.addEventListener('hidden.bs.modal', () => {
        linksBtns.forEach(btn=>{
            btn.classList.remove(`onClick_${btn.id}`)
        })
    })
})
