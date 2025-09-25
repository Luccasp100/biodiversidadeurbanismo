import { Link } from 'react-router-dom';
import { DadosAves } from '../DadosAves/DadosAves';
import '../Estilos/EstilosSumario.css';

function SumarioAve() {
    return (
        <section className='sumario-container'>
            <Link className='btn-voltar' to={"/"}>Voltar</Link>
            <h2 className='titulo-sumario'>Sumário</h2>

            <ul className='lista-participantes'>
                {DadosAves.map((ave) => (
                    <li className='conteudo-lista-participantes' key={ave.id}>
                        <Link to={`/aves/${ave.id}`}>
                            {ave.titulo}
                        </Link>
                    </li>
                ))}
            </ul>

        </section>
    );
}

export default SumarioAve;