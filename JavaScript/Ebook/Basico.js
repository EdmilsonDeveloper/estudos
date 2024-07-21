let HSS = 80; //variavel HoradeSonoSemanal
let HSD = HSS / 7; //variavel HoradeSonoDia

if(HSD >= 8){  //condição SE
    console.log("é saudável");
}else{ //condição SENÃO
    console.log("precisa melhorar")
}

function multiplicarSomar(numeroA, numeroB){ //função replicar
    let resultado = numeroA * numeroB;
    resultado = resultado + 2;
    return resultado;
}

let variavel = multiplicarSomar(2, 3); //variavel para puxar o console
console.log(variavel)

function criarNome(primeiroNome, segundoNome){
    let nomeCompleto = primeiroNome + segundoNome;
    return nomeCompleto;
}

console.log(criarNome("edmilson ", "nascimento"))

let nomes = ["edmilson", "amanda", "jhon"] //metodo map
nomes.map((nome)=>{
    console.log(nome)
})

let numeroComVirgula = 1.1243 //metodo tofixed
console.log(numeroComVirgula.toFixed(2))

let numeroLegal = 404 //metodo tostring
let numeroString = numeroLegal.toString()

let nomeCompleto = "Ricardo Silva" //metodo includes
let contemSilva = nomeCompleto.includes("Silva")

console.log(contemSilva)

let cachorro = { //funções como Valor
    nome: "Billy",
    latir: () => {
        console.log("AU");
    }
}

cachorro.latir();

function updateGutters(cm) {
    var gutters = cm.display.gutters,
        __specs = cm.options.gutters;

    removeChildren(gutters);

    for (var i = 0; i < specs.length; ++i) {
        var gutterClass = __specs[i];
        var gElt = gutters.appendChild(
            elt(
                "div",
                null,
                "CodeMirror-gutter " + gutterClass
            )
        );
        if (gutterClass == "CodeMirror-linenumbers") {
            cm.display.lineGutter = gElt;
            gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
        }
    }
    gutters.style.display = i ? "" : "none";
    updateGutterSpace(cm);

    return false;
}