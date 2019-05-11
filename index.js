class Perro{
    constructor(raza, name, genero){
        this.raza = raza
        this.name = name
        this.genero = genero
    }
    ladrar(){
        console.log(`Wow ${this.name}`)
    }
    comer(){
        console.log('ñam ñam')
    }
}


const pulque = new Perro('pitbull', 'Pulque', 'macho')
console.log(pulque)
//const array = new Array()
//console.log(array)

pulque.ladrar()
const matias = new Perro('callejero', 'Matias', 'macho')
console.log(matias)
matias.ladrar()


