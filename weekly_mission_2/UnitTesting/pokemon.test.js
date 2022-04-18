 import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});


// Definocion básica de una prueba
//test('Test 1) Create a new object pokemon', () => {
//  expect().toBe();
//});

// TDD Test Driven Development
// 1) Escribir una prueba de lo que quieres modelar
// 2) Correr la prueba y verla fallar
// 3) Ecribir el código que haga pasar esa prueba