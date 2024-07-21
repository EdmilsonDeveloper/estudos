let numeros: number[] = [20, 30, 40];
//let numeros: Array<number| string> = [20, 30, 40];
//let numeros: (number| string)[] = [20, 30, 40];

numeros.push(50); //adiciona no final
numeros.unshift(10); // adiciona no inicio

numeros.pop(); //remove do final
numeros.shift() //remove do inicio

console.log(numeros)

let numeros_ro: ReadonlyArray<number> = [100, 200, 300]; // apenas leitura

console.log(numeros_ro)





