/*let ListaGenerica = [];
console.log(ListaGenerica);
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby','GoLang');

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();
  function mostrarLenguagesReversoSeparadamente() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguagesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesReversoSeparadamente();
  

  function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log('Média:', media);
  
  function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);
  
 let numeros = [1,2,3,4,5,1];
 Resultado = sumarLista(numeros);  
  function sumarLista(numeros) {
  var Resultado = 0;
  for (let i = 0; i < numeros.length; i++) {
    Resultado += numeros[i];
  }
  return Resultado;
 }
 console.log(Resultado);
 

 function encontrarPosicion(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
          return i; // Devuelve la posición si encuentra el elemento
      }
  }
  return -1; // Devuelve -1 si el elemento no está en la lista
}

// Ejemplo de uso
const miLista = [1, 3, 5, 7, 9];
const elementoBuscado = 8;
const posicion = encontrarPosicion(miLista, elementoBuscado);
console.log("La posición del elemento", elementoBuscado, "es:", posicion);


let lista1 = [1,2,3,4,5];
let lista2 = [1,2,3,4,5,7];

function sumaListas(lista1,lista2) {
  if (lista1.length !== lista2.length) {
    alert("Las listas deben tener la misma longitud");
}

var resultado = [];
for (let i = 0; i < lista1.length; i++) {
    resultado.push(lista1[i] + lista2[i]);
}
return resultado;
}
var resultado = sumaListas(lista1, lista2);
console.log(`La suma de las listas es: ${resultado}`);
*/
let lista = [2,3];
function cuadrado(lista) {
  var cuadrado = [];
  for (let i = 0; i < lista.length; i++) {
        cuadrado.push(lista[i] * lista[i]);
    }
    return cuadrado;
}
var cuadrado = cuadrado(lista);
console.log(cuadrado);
