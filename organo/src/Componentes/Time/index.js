import Colaborador from '../Colaborador'
import './time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) && // função criada para esconder os times caso não tenha colaborador. e feito assim com base na renderização do jfx, pois não pode se usar if e ele ler linha por linha.
        <section key={props.nome} className="time" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }} >{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        cor={props.corPrimaria}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        urlImagen={colaborador.imagem}
                    />

                )}
            </div>
        </section>
    )
}

export default Time