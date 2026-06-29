import { useRef, useState } from "react";
import Itemlist from "./Itemlist"


function App() {
  const [Listamercado, setListamercado ] = useState( []);
  const inputAdicionar = useRef();

  // console.log("ola, mundo");
 // const Listamercado = ["Banana", "Maça", "Carne",];
// setListamercado([Listamercado])


  const AdicionarElemento = () => {
  const novaLista = [...Listamercado];
  const valorInput = inputAdicionar.current.value;

  if(valorInput !== ''){

  novaLista.push(valorInput);
  setListamercado(novaLista)
  
  inputAdicionar.current.value = "";
      console.log(novaLista);
}
    //Listamercado = novaLista
    //Listamercado.push("novo item");

};

  return ( 
  <>
  
  <h1> Lista de merecado !</h1>
  <input ref={inputAdicionar} type="text" placeholder="  Digite um item!"/>
  <button onClick={() => AdicionarElemento()}>Adicionar</button>

  {Listamercado.length > 0 ? ( <ul>
    {
      Listamercado.map((Itemlista,index) => (
        <Itemlist key={index} Itemlist={Itemlista} Listamercado={Listamercado} setListamercado={setListamercado}/>
      ))
    }
  </ul>
) : (<p>Voce nao tem nunhum item na sua lista</p> )}
 

  </>
);
}

export default App




//hook  usestate --> cria uma variavel de estado
// usestate nao retorna uma informaçao ele retorna array [a variavel que armazena a informação, uma funçao para alterar essa]
// tag vazia no react se chama fragment 


// useRef 