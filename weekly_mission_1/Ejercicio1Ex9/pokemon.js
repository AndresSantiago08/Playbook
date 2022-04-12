
class Pokemon {
    constructor(name) {
      // variable local "name"
      this.name = name
    }
  // Método
  sayHello = () => {
    console.log(`Mi pokemon ${this.name} te saluda!!!`)
  }
  // Método
  sayMessage = (message) => {
    console.log(`Mi pokemon ${this.name} dice: ${message}`)
  }
  
}
// Esta clase se exporta en este módulo
module.exports = Pokemon;