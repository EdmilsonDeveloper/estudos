alert('') //Passar uma Mensagem
confirm('') //Uma Confirmação
prompt('') //Uma Pergunta

cometario JS
// comentario em linha
/**/ comentario de mais de 1 linha

comentario CSS
/**/

comentario Html
<!-- -->

var: não use!!!
let: uma variavel que pode receber alteração
const: uma variavel que não muda

sinal '=' Sempre ler como recebe
sinal '+' serve para adição e concatenação

typeof
string são cadeias de caracteres e pode ser declarada de 3 formas "", '' e ``
number são numeros tanto inteiros como reais: Infinity e NaN
boolean: true or false
undefined
null: objeto
object: array
function

toda variavel tem um identificador
identificadores podem ser iniciados por uma letra, $ ou _
não podem começar com numeros
é possivel usar letras ou numeros
é possivel usar simbolos e acentos
não podem conter espaços
não podem ser palavras reservadas
dicas: 
maiusculas e minusculas fazem diferença
escolher nomes coerentes
evite ser um programador alfabeto ou contador

Number.parseInt(n) //converter para inteiro
Number.parseFloat(n) //converter para real
Number faz o trabalho sozinho

n.toString ou String(n) converte para string

Placeholder: ${n}
para uma template string usar ``

n.length diz quantos caracteres tem a string
n.toUpperCase() tudo maiusculo
n.toLowerCase() tudo minusculo

.tofixed(n) tamanho das casa decimais
.toLocaleString('pt-BR',{style: 'currency' currency: 'BRL'}) declarar a moeda

operadores:{
  aritméticos{
    '+': adição
    '-': subtração
    '*': multiplicação
    '/': divisão
    '%': resto da divisão inteira
    '**': potencia(elevado)
    Ordem de Precedência{
      1º'()'
      2º'**'
      3º'*/%'
      4º'+-'
    }
  }
  atribuição{
    auto-atribuição: posso dar um novo valor a uma variavel ja existente
    ex: n = n+4, etc... simplificando: n += 4, etc...
    incremento: n ++, n --
  }
  relacionais{
    '>':maior que
    '<': menor que
    '>=': maior ou igual
    '<=': menor ou igual
    '==': igual
    '!=': diferente
    '===': identidade igual
    '!==': identidade diferente
  }
  lógicos{
    Ordem de Precedência{
      1º 'não'
      2º 'e'
      3º 'ou'
    }
    '!': negação = 'não'{
      !true = false, 
      !false = true
    }
    '&&': conjução = 'e'{
      true && true = true
      true && false = false
      false && true = false
      false && false = false
    }
    '||': disjunção = 'ou'{
      true || true = true
      true || false = true
      false || true = true
      false || false = false
    }
  }
  ternário{
    na ordem de precedência é sempre o ultimo a ser feito
    é o mesmo que 'se' e 'senão' sem usar 'if' e 'else'
    teste'?'true':'false
    ex: média >= 7 ? "aprovado" : "reprovado"
  }
}

Metodos de acesso{
  por Marca{
    getElementsByTagName()
  }
  por ID{
    getElementById()
  }
  por Nome{
    getElementsByName()
  }
  por Classe{
    getElementsByClassName()
  }
  por Seletor{
    querySelector()
    querySelectorAll()
  }
}

Funções{
  n.addEventListener(): ligar o JS com o HTML
  function ação(parametro){
  }
}