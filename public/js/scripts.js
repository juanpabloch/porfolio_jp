const linksBtns = document.querySelectorAll(".linksBtn")

const contactLink = document.getElementById('contact-btn')
const contactContainer = document.getElementById('contacto')
const contactContent = document.querySelector('#contacto .contact')

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


modalsLinksList.forEach(modal=>{
    modal.addEventListener('hidden.bs.modal', () => {
        linksBtns.forEach(btn=>{
            btn.classList.remove(`onClick_${btn.id}`)
        })
    })
})


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


// const experienceModal = document.getElementById('experienceModal')
// experienceModal.addEventListener('shown.bs.modal', function () {
//     console.log("HOMA")
// })

