import { useEffect, useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [github, setGithub] = useState('')
    const [time, setTime] = useState('')

    useEffect(() => console.log('renderizando'), [nome, cargo])

    const aoSalvar = (evento) => {
        evento.preventDefault()
        
        let imagemUrl = github;

        if(!github.includes('https://github.com/') && !github.includes('.png')){
            imagemUrl = `https://github.com/${github}.png`
        }

        props.aoCadastrarColaborador({
            nome,
            cargo,
            imagem: imagemUrl,
            time
        });

        setNome('')
        setCargo('')
        setGithub('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Nome Github"
                    placeholder="Informe seu GitHub"
                    valor={github}
                    aoAlterado={valor => setGithub(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Departamento"
                    itens={props.nomeTimes}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}


export default Formulario