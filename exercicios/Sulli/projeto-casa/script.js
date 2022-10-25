const json = [
  { "id" : "1",
    "imagem": "./images/pose.jpg",
    "titulo": "Pose",
    "ano": "2018",
    "diretor": "Ryan Murphy",
    "generos": ["Drama"],
    "elenco": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"], 
    "instagram": "https://www.instagram.com/poseonfx/"
  },
  {  "id" : "2",
    "imagem": "./images/manhas.jpg",
    "titulo": "Manhãs de Setembro",
    "ano": "2021",
    "diretor": "Luis Pinheiro",
    "generos": ["Drama"],
    "elenco": ["Liniker", "Linn da Quebrada"], 
    "instagram": "https://www.instagram.com/explore/tags/manhasdesetembroserie/"
  },
  {  "id" : "3",
    "imagem": "./images/euphoria.jpg",
    "titulo": "Euphoria",
    "ano": "2019",
    "diretor": "Sam Levinson",
    "generos": ["Drama"],
    "elenco": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"], 
    "instagram": "https://www.instagram.com/euphoria/"
  },
  {  "id" : "4",
    "imagem": "./images/veneno.jpeg",
    "titulo": "Veneno",
    "ano": "2020",
    "diretor": "Javier Ambrossi",
    "generos": ["Drama", "Biografia"],
    "elenco": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"], 
    "instagram": "https://www.instagram.com/venenolaserie/"
  },
  {  "id" : "5",
    "imagem": "./images/legendary.jpg",
    "titulo": "Legendary",
    "ano": "2020",
    "diretor": "Rik Reinholdtsen",
    "generos": ["Reality Show", "Competição"],
    "elenco": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"], 
    "instagram": "https://www.instagram.com/legendarymax/"
  },
]

/* 
diretor
elenco
ano

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

-algoritimo
Colocar os outros card
Altero a ID das card
armazenar as ids do doc
editar a funcao preencher dados para receber os dados da array
chamar todas as funcoes
  - editar os Id's de todas as tags onde ocorrerão as mudanças dinâmicas;
  - capturar os ids dentro da função;

editar css
*/

json.forEach(shows => {
  const photography = document.getElementById(`photography${shows.id}`);
  const title = document.getElementById(`title${shows.id}`) 
  const ano = document.getElementById(`ano${shows.id}`);
  const gender = document.getElementById(`gender${shows.id}`);
  const elenco = document.getElementById(`elenco${shows.id}`);
  const diretor = document.getElementById(`diretor${shows.id}`);
  const instagram = document.getElementById(`instagram${shows.id}`)
  
  photography.setAttribute('src', shows.imagem);
  title.innerText = shows.titulo;
  gender.innerText = shows.generos.join(' - ');
  ano.innerText = shows.ano;
  elenco.innerText = shows.elenco.join(' - ');
  diretor.innerText = shows.diretor;
  instagram.setAttribute('src', shows.instagram);
})