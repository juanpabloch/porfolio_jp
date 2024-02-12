const linksBtns = document.querySelectorAll(".linksBtn")

const contactLink = document.getElementById('contact-btn')
const contactContainer = document.getElementById('contacto')
const contactContent = document.querySelector('#contacto .container')

const aboutContainer = document.getElementById('about')
const aboutLink = document.getElementById('about-btn')

const workContainer = document.getElementById('work')
const workLink = document.getElementById('work-btn')
const closeWork = document.querySelector("#work #closeBtn")

const homeContainer = document.getElementById('home')

const pageContainer = document.getElementById('page')



window.addEventListener("load", (e)=>{
    if (navigator.userAgent.indexOf("Chrome") > -1) {
        document.querySelectorAll(".linksBtn").forEach(link=>{
            link.style.transform = "rotate(180deg)"
        })
    }
})


linksBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        const currentScrollPos = Math.ceil(window.scrollY)

        if (currentScrollPos > 0) {
            window.scrollTo(0,0)
        }

        if(e.target.classList.contains("onClick_contact-btn")){
            e.preventDefault()
        }

        if (e.target.dataset.link == "contact") {
            contactContainer.classList.remove('hide')
            window.scrollTo(0, document.body.scrollHeight);
        }else if(e.target.dataset.link == "about"){
            aboutContainer.classList.remove('close')
            window.scrollTo(0, 0)
        }else if (e.target.dataset.link == "work") {
            pageContainer.classList.add('show')
            // homeContainer.classList.add('opacity0')
        }
    })
})

closeWork.addEventListener("click", (e)=>{
    document.querySelector("#work").style.width = "0px";
    setTimeout(()=>{
        pageContainer.classList.remove('show')
    }, 500)
    workLink.classList.remove("onClick_work-btn");
})

let glitchAnimation;
linksBtns.forEach(btn=>{
    btn.addEventListener("mouseover", (e)=>{
        if (!(e.target.dataset.link == "work" && e.target.classList.contains("onClick_work-btn"))) {
            document.querySelector("#hero-image").classList.add("animate_glitch") 
        }
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

// const contactContainer = document.getElementById("contact-btn")
// contactContainer.addEventListener('click', (e)=>{
//     document.getElementById('contacto').classList.remove('hide')
//     window.scrollTo(0, document.body.scrollHeight);
// })


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

    // scroll abajo
    if (currentScrollPos > lastScrollPos && Math.ceil(currentScrollPos) >= 300 && !aboutContainer.classList.contains("close")) {
        aboutContainer.classList.add("close")
        aboutLink.classList.remove("onClick_about-btn");
    }

    // scroll arriba
    if (currentScrollPos < lastScrollPos && currentScrollPos < 100) {
        window.scrollTo(0,0)
        contactLink.classList.remove("onClick_contact-btn");

        if(currentScrollPos == 0){
            contactContainer.classList.add('hide');
        }
    }

    if (currentScrollPos < lastScrollPos && currentScrollPos < 110) {
        contactContent.classList.add('opacity0');
    }else{
        if (contactContent.classList.contains('opacity0')) {
            contactContent.classList.remove('opacity0');
        }
    }

    // Actualizar la última posición de desplazamiento
    lastScrollPos = currentScrollPos;
});

// let lastScrollPos = 0;
// const homeEl = document.querySelector("#home");
// const contactoContainer = document.querySelector('#contacto .container');

// window.addEventListener('scroll', (e) => {
//     const currentScrollPos = window.scrollY;

//     if (currentScrollPos > lastScrollPos && Math.ceil(currentScrollPos) >= 300 && !aboutContainer.classList.contains("close")) {
//         aboutContainer.classList.add("close");
//         linksBtns.forEach(btn => {
//             btn.classList.remove(`onClick_${btn.id}`);
//         });
//     }

//     if (currentScrollPos < lastScrollPos && currentScrollPos < 100) {
//         window.scrollTo(0,0);
//         linksBtns.forEach(btn => {
//             btn.classList.remove(`onClick_${btn.id}`);
//         });
//         contactContainer.classList.toggle('hide', currentScrollPos === 0);
//     }

//     contactoContainer.classList.toggle('opacity0', currentScrollPos < lastScrollPos && currentScrollPos < 110);

//     lastScrollPos = currentScrollPos;
// });