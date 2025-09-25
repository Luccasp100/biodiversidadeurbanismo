import { Link } from "react-router-dom";
import '../Estilos/EstilosMenu.css';

function Menu(){
    return (
        <main className="menu-container"> 
            <section className="explicacao-container">
                <p className="explicacao-evento">O Concurso de Fotografia e Ilustração Científica foi concebido em 2022 como atividade de extensão vinculada à XIX Semana Acadêmica da Biologia da Universidade Federal de Pelotas (UFPel). Desde sua criação, tem sido realizado anualmente, estruturando-se como um espaço de integração entre ciência, arte e sociedade. Até o momento, três edições foram concluídas, cada uma com organização conduzida por estudantes dos cursos de Ciências Biológicas da UFPel em parceria com o Museu de Ciências Naturais Carlos Ritter (MCNCR)</p>
            </section> 

            <section className="modalidades-container">
                <h1 className="menu-titulo">Confira os participantes!:</h1>
                <Link className="menu-estilo-link" to={"/sumarioave"}><h3>Fotografias</h3></Link>
                <Link className="menu-estilo-link" to={"/sumarioilustracao"}><h3>Ilustrações</h3></Link>
            </section>
        </main>
    )
}

export default Menu;