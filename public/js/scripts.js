const linksBtns = document.querySelectorAll(".linksBtn")

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




// setInterval(updateImage2, 50);


// window.addEventListener("load", () => {

//     let country = document.querySelector("#id_ciudad_de_entrega");
//     let deliveryAdress = document.querySelector("#id_direccion_de_entrega_calle_numero_localidad_cp");
//     const checkBoxPoliticas = document.querySelector('input[name="acepto_las_politicas_de_privacidad"]')
//     checkBoxPoliticas.checked = true;
//     checkBoxPoliticas.parentElement.parentElement.style.display = "none"

//     const dateHelpText = document.querySelector('input[name="fecha_de_entrega_se_muestran_solo_los_disponibles"]')
//     dateHelpText.nextElementSibling.style.fontWeight = "bold"
    
//     country.addEventListener("change", () => {
//         if (country.value == "Buenos Aires Of Puerto Madero" || country.value == "Buenos Aires Of Pilar") {
//             deliveryAdress.parentElement.classList.add("d-none");
//             document.querySelector("input[name='direccion_de_entrega_calle_numero_localidad_cp']").value = "None"
//             $('input[name="fecha_de_entrega_se_muestran_solo_los_disponibles"]').datepicker().data('datepicker').setStartDate(`+1d`);
//         }else if(country.value == "Buenos Aires Otra locación"){
//             document.querySelector('input[name="ciudad_de_entrega_other"]').disabled = true;
//         }else {
//             deliveryAdress.parentElement.classList.remove("d-none");
//             document.querySelector("input[name='direccion_de_entrega_calle_numero_localidad_cp']").value = "";
//             $('input[name="fecha_de_entrega_se_muestran_solo_los_disponibles"]').datepicker().data('datepicker').setStartDate(`+7d`);
//         };
//     });

//     // DATEPICKER HOLIDAYS
//     const ciudadEntrega = document.querySelector("#id_ciudad_de_entrega");
    
//     ciudadEntrega.addEventListener("change", async (e) => {
//         const country = getCountryCode(e.target.value);
//         if(country){
//             const holidayList = await getHolidays(country);
//             disableDates(holidayList);
//         }
//     });
  
//     const getCountryCode = (city) => {
//         switch (city) {
//             case "Bogotá" || "Medellín":
//                 return "CO";
//             case "Lima":
//                 return "PE";
//             case "Santiago":
//                 return "CL";
//             case "Otro":
//                 return null
//         }

//         if (city.includes("Buenos Aires")){
//             return "AR"
//         }
//     };
  
//     const getHolidays = async (country) => {
//         const API_KEY = "AIzaSyAqHxbFTYlIkxP_u6ihKJ6Qysck6QGPyJg";
//         const idioma = "es";
//         const url = `https://www.googleapis.com/calendar/v3/calendars/${idioma}.${country}%23holiday%40group.v.calendar.google.com/events?key=${API_KEY}`;
//         const response = await fetch(url);
//         const data = await response.json();
//         const holidayList = data.items
//             .filter((item) =>!item.description.includes("Para ocultar las celebraciones"))
//                 .map((item) => item.start.date)
//                 .map((date) => date.split("-").reverse().join("-"));
        
//         console.log("holidays ok!");
//         return holidayList;
//     };
  
//     const disableDates = (holidayList) => {
//         const datepicker = document.querySelector('input[name="fecha"]');
//         console.log(holidayList)
//         if (datepicker) {
//             $('input[name="fecha"]')
//                 .datepicker().data('datepicker').setDatesDisabled(holidayList);
//         }
//     };

// });