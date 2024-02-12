// const modelAbout = document.getElementById('aboutModal').querySelector('.info_body')
const modelWorks = document.getElementById('work').querySelector('.carousel-inner')
// const modelContact = document.getElementById('contactModal').querySelector('.info_body')

fetch("./public/js/data.json")
    .then((response)=> response.json())
    .then((json)=> {
        // console.log(json)
        // aca escribo todo el codigo para popular el html
        // modelAbout.innerHTML = json.about_me

        uploadWorkData(json.projects)
    })


function uploadAboutData(data) {
    modelAbout.innerHTML = data.about_me
}

function uploadWorkData(data) {
    console.log(data)
    let html = ''

    for (let i = 0; i < data.length; i++) {
        html += `
            <div class="carousel-item ${i == 0 ? "active" : "" }">
                <div class="item-container">
                    <div class="image-container">
                        <div class="image">
                            <img src="./public/img/works/${data[i].image}" class="d-block w-100" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <h2>${data[i].title}</h2>
                        <p>${data[i].description}</p>
                        <a href="${data[i].url}" target="_blank">VER WEB</a>
                        <br/>
                        <a href="${data[i].github}" target="_blank">VER CODIGO</a>
                    </div>
                </div>
            </div>
        `
    }

    modelWorks.innerHTML = html
}
