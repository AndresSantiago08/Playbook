const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// Ejercicio 2.1
console.log("2.1 - Nombre de cada explorer")
explorers.forEach(elementOfArray => console.log(elementOfArray.name))
// Ejercicio 2.2
console.log("2.2 - Stack de cada explorer")
explorers.forEach(elementOfArray => console.log(elementOfArray.stack))
// Ejercicio 2.3
console.log("2.3 - Crea una nueva lista con las listas de stacks de cada explorer")
const NewList = explorers.map(elementOfArray => {return elementOfArray.stack})
console.log(NewList)
// Ejercicio 2.4
console.log("2.4 - Lista de explorers que tengan en su stack 'js'")
const ListExplorersJS = explorers.filter(explorer => explorer.stack.includes('js'))
console.log(ListExplorersJS)
// Ejercicio 2.5 
console.log("2.5 - Primer explorer que sea de la CDMX")
console.log(explorers.find(elementOfArray => elementOfArray.city === "CDMX"));
// Ejercicio 2.6
console.log("2.6 - Suma de todos los exercises_completed")
console.log(explorers.reduce((count, elementOfArray) => count + elementOfArray.exercises_completed, 0))
// Ejercicio 2.7
console.log("2.7 - Validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true")
const ExplorerFinishedFrontEnd = explorers.some(element => element.missions.frontend.exercisesFinished === true)
console.log(ExplorerFinishedFrontEnd)