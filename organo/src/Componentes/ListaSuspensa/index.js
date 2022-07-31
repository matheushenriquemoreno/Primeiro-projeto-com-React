import { useEffect } from 'react'
import './listaSuspensa.css'

const ListaSuspensa = (props) => {

    // useEffect((3======zzzz\wwwwwwwwwwwwwwwwwwwwww2wwwwwwwwwww wwwwwwwwwww) => props.aoAlterado(props.itens[0]), []) // array vazio = sem estado 

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
               <option value="">Selecione</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa