
import './Colaborador.css'

const Colaborador = ({ nome, urlImagen, cargo, cor }) => { //  utilizando destruction para receber os valores por parametros

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: cor }}>
                <img src={urlImagen} alt=''></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador 