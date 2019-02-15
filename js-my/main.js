

function getdados(url) {    
    fetch(url, {headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
        .then(res => res.json())
        .then(json => adicionarDados(json))
}
  
function adicionarDados(json) {
    const idHTML = document.getElementById('dadosjson')
    let index = 0
    for (let indice=0; indice < 50; indice++)
    {
        let pub = json[indice].Published.slice(2,json[indice].Published.length)
        let title = json[indice].Title
        if (title.length > 69)
        {
            title = title.slice(0, 70)
            title = title+"..."
        }

        let z = `<tr class="codeclass">
                        <th class="data">
                            ${pub}
                        </th>
                        <td>
                            <a href="${json[indice].Download}"><i class="material-icons">get_app</i></a>
                        </td>
                        <td>
                            <a href="${json[indice].View}"><i class="material-icons">play_for_work</i></a>
                        </td>
                        <td>
                            <a href="#"><i class="material-icons">done</i></a>
                        </td>
                            <td colspan="4">
                                <a href="#" data-toggle="modal" data-target="#exampleModalLong${indice}" class="link" style="text-decoration: none;">${title}</a>
                            </td>
                        <td>
                            <a href="#" class="link plataforma" style="text-decoration: none;">${json[indice].Platform}</a>
                        </td>
                        <td>
                            <a href="#" class="link" style="text-decoration: none;">${json[indice].Author}</a>
                        </td>
                    </tr>`
        idHTML.insertAdjacentHTML('beforeend', z)
        index++
    }
    adicionarDescr(json)
}

function adicionarDescr(json)
{
    for (let indice=0; indice < 50; indice++)
    {
        let tmp = `<div class="modal code fade bd-example-modal-lg" id="exampleModalLong${indice}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle${indice}" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel${indice}"></h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									        <span aria-hidden="true">&times;</span>
									    </button>
								    </div>
							      	<div class="modal-body">
							       		${json[indice].code	}
							      	</div>
							      	<div class="modal-footer">
							        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							        	<button type="button" class="btn btn-primary">Copy Code</button>
							      	</div>
							    </div>
							</div>
                        </div>`
        const dialog = document.getElementById('dialogtg')
        dialog.insertAdjacentHTML('beforeend', tmp)
    }
}
  
getdados("http://localhost:9000/pagina1")

const clickpag_1 = document.querySelector("#pagina1")
const clickpag_2 = document.querySelector("#pagina2")
const clickpag_3 = document.querySelector("#pagina3")

const clickpag_4 = document.querySelector("#pagina4")
const clickpag_5 = document.querySelector("#pagina5")
const clickpag_6 = document.querySelector("#pagina6")

const clickpag_7 = document.querySelector("#pagina7")
const clickpag_8 = document.querySelector("#pagina8")
const clickpag_9 = document.querySelector("#pagina9")

const clickpag_10 = document.querySelector("#pagina10")
const clickpag_11 = document.querySelector("#pagina11")
const clickpag_12 = document.querySelector("#pagina12")

const todo = document.getElementById('dadosjson')
const dialog = document.getElementById('dialogtg')

const btlimpar = document.querySelector('#bt-limpar')

function apagarHTML(e)
{
    todo.innerHTML = ""
    dialog.innerHTML = ""
    getdados("http://localhost:9000/"+e.target.id)
}

clickpag_1.addEventListener('click', apagarHTML, false)
clickpag_2.addEventListener('click', apagarHTML, false)
clickpag_3.addEventListener('click', apagarHTML, false)

clickpag_4.addEventListener('click', apagarHTML, false)
clickpag_5.addEventListener('click', apagarHTML, false)
clickpag_6.addEventListener('click', apagarHTML, false)

clickpag_7.addEventListener('click', apagarHTML, false)
clickpag_8.addEventListener('click', apagarHTML, false)
clickpag_9.addEventListener('click', apagarHTML, false)

clickpag_10.addEventListener('click', apagarHTML, false)
clickpag_11.addEventListener('click', apagarHTML, false)
clickpag_12.addEventListener('click', apagarHTML, false)

const searchButton = document.querySelector('#procurar')
const codeSearch = document.querySelector('#procurar')
const codeSection = document.querySelector('#dadosjson')

codeSearch.addEventListener('keyup', filterShellcode)
searchButton.addEventListener('click', filterShellcode)
//searchButton.addEventListener('keyup', cleanSearch) // Evento de digitar
btlimpar.addEventListener('click',cleanSearch)

function filterShellcode()
{
    const codeViews = Array.from(codeSection.querySelectorAll('.codeclass'))
    const inputRegex = new RegExp(`${codeSearch.value}`, 'i')
    for (let elemento = 0; elemento < codeViews.length; elemento++)
    {
        let tds = codeViews[elemento].querySelectorAll('td')
        let texto = tds[4].lastElementChild.text
        if (texto == "")
        {
            codeViews[elemento].className = 'codeclass'
        }
        else {
            if (!inputRegex.test(texto))
                codeViews[elemento].className = 'codeclass hidden'
        }
    }
}

function cleanSearch() {
    const codeViews = Array.from(codeSection.querySelectorAll('.codeclass'))
    for (let elemento = 0; elemento < codeViews.length; elemento++)
    {
        codeViews[elemento].className = 'codeclass'
    }
    codeSearch.value = ""
}


const navTop = document.querySelector('.nav-top')
loadNavTop()

function loadNavTop() {
    navTop.addEventListener('click', () => {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
    })
})
}
document.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 1/3) {
      navTop.className = 'nav-top'
    } else {
      navTop.className = 'nav-top hiddenn'
    }
  })
