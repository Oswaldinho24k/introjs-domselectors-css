const id = document.getElementById('content')
console.log(id)

const classes =  document.getElementsByClassName('list-item')
console.log(classes)

const tags = document.getElementsByTagName('li')
console.log(tags)

const parrafo = document.createElement('p')
parrafo.innerHTML = 'lorem ipsum bl bl abla'
id.appendChild(parrafo)

/*exercise*/

const lis = document.getElementsByTagName('li')
for(let i =0;i<lis.length;i++){
    const link = document.createElement('a')
    link.href="https://www.facebook.com"
    if(i%2==0){
        link.innerText = 'perro'
        link.style.color="blue"
        link.style.backgroundColor = "red"
    }else{
        link.innerText = 'gato'
    }    
    lis[i].appendChild(link)
}

/*exercise2*/
const people = [
    {
        name:'Oswaldo',
        paid:false,        
    },
    {
        name:'Omar',
        paid:true,        
    },
    {
        name:'Ricardo',
        paid:false,        
    },
    {
        name:'Gustavo',
        paid:true,        
    },
    {
        name:'Tamari',
        paid:false,        
    }
]

/**************** Todo con javascript *********************/
//generar un section con un id = section
//Por cada elemento del array generar un div y agregarlo al section
//en cada div debe aparecer el nombre de cada persona
//cada tarjeta debe tener borde redondeado, padding,
//las tarjetas deben estar acomodadas con flexbox
// if paid color text verde : rojo

const section = document.createElement('section')
section.id="section"
section.style.display = 'flex'
section.style.justifyContent = 'space-around'
id.appendChild(section)

for(let i = 0; i<people.length;i++){
    const card = document.createElement('div')
    card.innerText = people[i].name
    card.style.padding = "10px"
    card.style.borderRadius = "5px"
    card.style.border = "solid 1px #000"
    // if(people[i].paid){
    //     card.style.color = 'green'
    // }else{
    //     card.style.color = 'red'
    // }
    people[i].paid ? card.style.color = 'green' : card.style.color = 'red'
    section.appendChild(card)
}



