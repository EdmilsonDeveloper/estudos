const teste=(txt?:string):void=>{
    console.log(txt);
}

const fsoma2=(n:number[]):number=>{
    let s:number = 0;
    n.forEach((e)=>{
        s+=e;
    });
    return s;
}

teste("CFBCursos");
teste("Curso de Typerscript");
teste("Youtube");
teste();

let numer:number[] = [10, 20, 30, 40, 50, 20, 30];

console.log(fsoma2(numer));
