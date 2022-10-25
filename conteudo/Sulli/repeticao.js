const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

console.log(numeros.length)
console.log(numeros)

for (let i = 0; i < numeros.length; i++) {
    let dobro = numeros[i]*2;
}

// i++ =(i = i + 1)

// WHILE

while (i < numeros.length) {
    let dobro = numeros[i]*2
    console.log(dobro)
    i++
}

// for/of especifico para arrays
// for (let i of numeros) {
//     let dobro = numero * 2;
// }