let numero = 1

function Botao(){
  return <button>Este Botão é o Botão {numero}</button>
}

let lista = [
  <li>Item 1</li>,
  <li>Item 2</li>,
  <li>Item 3</li>
]

function Lista(){
  return(
   <ul>
    {lista}
   </ul>
  )
}

export default Lista