let dados = {
    nome: "Douglistildes",
    idade: 25,
    status: "A",
    ola:() => {console.log("oi")},
    info:(p:string) => {console.log(p)}
}

dados.nome = "Josistelderson"
console.log(typeof(dados));
console.log(dados.nome);

dados.ola();
dados.info(dados.nome);


