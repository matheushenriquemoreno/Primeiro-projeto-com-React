import { useState } from 'react'
import './CampoTexto.css'

const 
CampoTexto = (props) => {

    const placeholderModificada = `teste ${props.placeholder}`
    /*
    console.log(useState(''))

    const [valor, setvalor] = useState('teste')


    const aoDigitar = (evento) =>{
        console.log(evento)

        setvalor(evento.target.value)

        console.log(valor)
    }
    */
    
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto