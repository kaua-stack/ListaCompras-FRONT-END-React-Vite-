
import React from 'react';

const Itemlist = ({Itemlist, Listamercado, setListamercado}) => {
const removerItem = () => { 
    const novalista = [...Listamercado]
    const novalistaFiltrada = novalista.filter((itemAtual) => itemAtual !== Itemlist );

setListamercado(novalistaFiltrada);
};



   // console.log(props.Itemlist);
  return (
    
        <li><p>{Itemlist}</p>
            <button onClick={() => removerItem()}>Remover</button>
        </li> 
        
  )
}

export default Itemlist
