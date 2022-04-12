
export default class Pokemon {
    constructor(name) {
      // variable local "name"
      this.name = name
    }
    // Método
    sayHello () {
        console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
    // Método - no se usa en este ejercicio
    sayMessage (message) {
        console.log(`Mi pokemon ${this.name} dice: ${message}`)
    }
  
}
