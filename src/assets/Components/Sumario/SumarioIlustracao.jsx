import { Link } from 'react-router-dom';
import { DadosIlustracao } from '../DadosIlustracao/DadosIlustracao';
import '../Estilos/EstilosSumario.css';

function SumarioIlustracao() {
    return (
        <section className='sumario-container'>
            <Link className='btn-voltar' to={"/"}>Voltar</Link>
            <h2 className='titulo-sumario'>Sumário</h2>

            <ul className='lista-participantes'>
                {DadosIlustracao.map((Ilustracao) => (
                    <li className='conteudo-lista-participantes' key={Ilustracao.id}>
                        <Link to={`/ilustracao/${Ilustracao.id}`}>
                            {Ilustracao.titulo}
                        </Link>
                    </li>
                ))}
            </ul>

        </section>
    );
}

export default SumarioIlustracao;