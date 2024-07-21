//NULL - UNDEFINED - UNKNOWN

//NULL - Tipo nulo
//UNDEFINED - Indefinido
//UNKNOWN - Desconhecido

let vnome2: string| null;
vnome2 = "Bruno";
console.log(vnome2);

let vnome3: any;
console.log(vnome3)

let vnome4: unknown = vnome2; //unknown só pode ser atribuido a tipos unknown ou any
let vnum: any = vnome4;
console.log(vnum);

