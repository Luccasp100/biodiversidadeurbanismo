import { useParams, Link } from 'react-router-dom';
import { DadosAves } from '../DadosAves/DadosAves';
import '../Estilos/EstilosFotos.css';
import '../../../../public/MenuInterecao/SetaDireita.svg'

function Aves() {
    const { id } = useParams();
    const ave = DadosAves.find(a => a.id === id);
    const currentIndex = DadosAves.findIndex(a => a.id === id);
    const prevAve = DadosAves[currentIndex - 1];
    const nextAve = DadosAves[currentIndex + 1];

    return (
        <main className="container-pagina">
            <section className="container-card">
                <h1 className="titulo-passaro">{ave.titulo}</h1>
                <div className="container-imagem">
                    <img className="imagem-passaro" src={ave.imagem} alt={ave.titulo} />
                    <p className="autor-imagem">Autor: {ave.autor}</p>
                </div>
                <p className="descricao-passaro">{ave.descricao}</p>

                <div className="container-navegacao">
                    {prevAve && <Link to={`/aves/${prevAve.id}`} className="link-navegacao-esquerda"><img className='seta-img'  src="../../../../MenuInterecao/SetaDireita.svg" alt="Seta para Direita" /></Link>}
                    <Link to="/sumarioave" className="link-navegacao-sumario">Sumário</Link>
                    {nextAve && <Link to={`/aves/${nextAve.id}`} className="link-navegacao-direita"><img className='seta-img' src="../../../../MenuInterecao/SetaDireita.svg" alt="Seta para Direita" /></Link>}
                </div>
            </section>
        </main>
    );
}

export default Aves;