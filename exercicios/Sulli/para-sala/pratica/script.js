
const cantora = {
  "nome": "Liniker",
  "foto": "./images/liniker.webp",
  "generos": ["MPB", "Soul", "R&B", "Blues"],
  "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
  "instagram": "https://www.instagram.com/linikeroficial/",
}

// Suponha que nosso projeto consiste em um site de informações sobre cantoras brasileiras e na página em questão a usuária selecionou a cantora Liniker, e a API nos retornou um JSON com todas as informações que precisamos (armazenado na variável objetoJson acima), então devemos popular nosso HTML com essas informações utilizando JavaScript 

// 1* passo, pegar os elemtos para manipular

const photography = document.getElementById('photography')
const title = document.querySelector('#title')
const gender = document.getElementById('gender')
const discography = document.getElementById('discography')
const instagram = document.getElementsById('instagram')

preencherDados = (cantora) => {
  photography.setAttribute('src', cantora.foto)
  title.innerText = cantora.nome
  gender.innerHTML = cantora.generos.join(' - ')
  discography.innerHTML = cantora.discografia.join(' - ')
  instagram.setAttribute()
}

preencherDados(cantora)