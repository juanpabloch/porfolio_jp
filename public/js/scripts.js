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

const contactLink = document.getElementById("contact-btn")
contactLink.addEventListener('click', (e)=>{
    document.getElementById('contacto').classList.remove('hide')
})


// const homeHeight = document.documentElement.scrollHeight
// let scrollUp = false
// window.addEventListener('scroll', (e)=>{
//     // console.log(Math.floor(window.scrollY))
//     if (Math.ceil(window.scrollY) == document.documentElement.scrollHeight - window.innerHeight) {
//         scrollUp = true        
//     }

//     if (scrollUp && Math.floor(window.scrollY) < 50) {
//         document.getElementById('contacto').classList.add('hide')
//         scrollUp = false
//         linksBtns.forEach(btn=>{
//             btn.classList.remove(`onClick_${btn.id}`)
//         })
//     }
// })

// let isScrollingUp = false;

// window.addEventListener('scroll', () => {
//     const scrollTop = document.documentElement.scrollTop;

//     // Verificar si el usuario ha alcanzado el final de la página
//     const isAtBottom = scrollTop + window.innerHeight >= document.documentElement.scrollHeight;
//     console.log(isAtBottom)
//     // Verificar si el usuario está desplazándose hacia arriba y cerca del principio de la página
//     if (isScrollingUp && scrollTop < 50) {
//         // Ocultar el elemento #contacto y restablecer el estado de desplazamiento
//         document.getElementById('contacto').classList.add('hide');
//         isScrollingUp = false;
//         // Restaurar estilos de los botones (esto supone que `linksBtns` está definido en otra parte del código)
//         linksBtns.forEach(btn => {
//             btn.classList.remove(`onClick_${btn.id}`);
//         });
//     }

//     // Actualizar el estado de desplazamiento si el usuario ha alcanzado el final de la página
//     if (isAtBottom) {
//         isScrollingUp = true;
//     }
// });

let lastScrollPos = 0;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    // Verificar si el usuario está desplazándose hacia arriba y cerca del principio de la página
    if (currentScrollPos < lastScrollPos && currentScrollPos < 100) {
        // Ocultar el elemento #contacto
        window.scrollTo(0,0)
        linksBtns.forEach(btn => {
            btn.classList.remove(`onClick_${btn.id}`);
        });

        if(currentScrollPos == 0){
            document.getElementById('contacto').classList.add('hide');
        }
    }

    if (currentScrollPos < lastScrollPos && currentScrollPos < 110) {
        document.getElementById('contacto').classList.add('hideja');
    }else{
        if (document.getElementById('contacto').classList.contains('hideja')) {
            document.getElementById('contacto').classList.remove('hideja');
        }
    }

    // Actualizar la última posición de desplazamiento
    lastScrollPos = currentScrollPos;
});