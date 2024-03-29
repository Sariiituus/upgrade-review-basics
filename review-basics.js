// Iteración #1: Mix for e includes

//Dado el siguiente javascript usa forof para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por consola el array
// de categorías. Ten en cuenta que las categorías no deberían repetirse.
// Para filtrar las categorías puedes ayudarte de la función .includes()

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

let categorias = [];
for (const movie of movies) {
  for (const category of movie.categories) {
    if (!categorias.includes(category)) {
      categorias.push(category);
    }
  }
}

console.log(categorias);



// Iteración #2: Mix Fors
// Dado el siguiente javascript usa forof y forin para hacer la media
// del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let media = 0;
let volumenTotal = 0;
let numeroSonidos = 0;

for (const user of users) {
    for (const sound in user['favoritesSounds']) {
        let volumenActual = user['favoritesSounds'][sound]['volume'];
        volumenTotal = volumenTotal + volumenActual;
        numeroSonidos = numeroSonidos + 1;
    }
}

media = volumenTotal / numeroSonidos;
console.log(media);



// Iteración #3: Mix Fors
// Dado el siguiente javascript usa forof y forin para saber cuantas veces
// ha sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y
//usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo
// de cada vez que ese sonido se repita como favorito en cada usuario.

const users_two = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let sonidosFavoritosConteo = {};

for (const user of users_two) {
    for (const sound in user['favoritesSounds']) {
        if (sonidosFavoritosConteo[sound] != undefined) {
            sonidosFavoritosConteo[sound] = sonidosFavoritosConteo[sound] + 1;
        }
        else {
            sonidosFavoritosConteo[sound] = 1;
        }
    }
}

console.log(sonidosFavoritosConteo);



// Iteración #4: Métodos findArrayIndex
// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y
// devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

const ejemplo = ['Mantis', 'Panda', 'Tigre', 'Serpiente'];

function findArrayIndex(array, text) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === text) {
            return index;
        }
    }

    return -1;
}

/*
function findArrayIndex(array, text) {
    return array.indexOf(text);
}
*/


console.log(findArrayIndex(ejemplo,'Tigre'));




// Iteración #5: Función rollDice
// Crea una función llamada rollDice() que reciba como parametro el numero de caras 
// que queramos que tenga el dado que deberá silumar el codigo dentro de la función.
// Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado.
// Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca información sobre la función de javascript Math.random();

function rollDice(numCaras) {
    let min = 1;
    let max = numCaras;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Tiramos un dado de 6 caras tres veces');
console.log(rollDice(6));
console.log(rollDice(6));
console.log(rollDice(6));


// Iteración #6: Función swap
// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
// Retorna el array resultante.


const datosArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(arr, i1, i2) {
    let aux = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = aux;
    return arr;
}
