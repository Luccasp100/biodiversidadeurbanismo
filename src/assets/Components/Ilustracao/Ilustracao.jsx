import { useParams, Link } from 'react-router-dom';
import { DadosIlustracao } from '../DadosIlustracao/DadosIlustracao';
import '../Estilos/EstilosFotos.css';

function Ilustracao() {
    const { id } = useParams();
    const ilustracao = DadosIlustracao.find(a => a.id === id);
    const currentIndex = DadosIlustracao.findIndex(a => a.id === id);
    const prevIlustracao = DadosIlustracao[currentIndex - 1];
    const nextIlustracao = DadosIlustracao[currentIndex + 1];

    return (
        <main className="container-pagina">
            <section className="container-card">
                <h1 className="titulo-passaro">{ilustracao.titulo}</h1>
                <div className="container-imagem">
                    <img className="imagem-passaro" src={ilustracao.imagem} alt={ilustracao.titulo} />
                    <p className="autor-imagem">Autor: {ilustracao.autor}</p>
                    <p className="tecnica-imagem">Tecnica: {ilustracao.tecnica}</p>
                </div>
                <p className="descricao-passaro">{ilustracao.descricao}</p>

                <div className="container-navegacao">
                    {prevIlustracao && <Link to={`/ilustracao/${prevIlustracao.id}`} className="link-navegacao-esquerda"><img className='seta-img'  src="../../../../MenuInterecao/SetaDireita.svg" alt="Seta para Direita" /></Link>}
                    <Link to="/sumarioilustracao" className="link-navegacao-sumario">Sumário</Link>
                    {nextIlustracao && <Link to={`/ilustracao/${nextIlustracao.id}`} className="link-navegacao-direita"><img className='seta-img' src="../../../../MenuInterecao/SetaDireita.svg" alt="Seta para Direita" /></Link>}
                </div>
            </section>
        </main>
    );
}

export default Ilustracao;