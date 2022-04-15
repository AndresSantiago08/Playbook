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
explorers.forEach(elementOfArray => console.log(elementOfArray.name))
// Ejercicio 2.2
explorers.forEach(elementOfArray => console.log(elementOfArray.stack))
// Ejercicio 2.3
const NewList = explorers.map(elementOfArray => {return elementOfArray.stack})
console.log(NewList)
// Ejercicio 2.4
const ListExplorersJS = explorers.filter(explorer => explorer.stack.includes('js'))
console.log(ListExplorersJS)
// Ejercicio 2.5 
console.log(explorers.find(elementOfArray => elementOfArray.city === "CDMX"));