// let vteste: string|number|boolean;
let vteste: any;
vteste = "Bruno";
vteste = 2024;
vteste = true;

let cursos: any[] = ["JavaScript", "TypeScript", "C++", 100, false];
let valores = [10, 200, 2023];

vteste = cursos;

cursos.push("Arduino");
cursos.push(1000);
valores.push(555);

console.log(cursos);
console.log(valores);
console.log(vteste)