import './Header.css';

function Header() {
    return(
        <section className='header-container'>
            <img className='imagem-header-universidade' src="/imagensHeader/imagemUniversidadeDePelotas.svg" alt="imagem Universidade de Pelotas"/>
            <h1 className='titulo-header'>4° concurso de fotografia e ilustração: Biodiversidade Urbana</h1>
            <img className='imagem-header-museu' src="/imagensHeader/imagemMuseuCarlosRitter.svg" alt="imagem da logo do Museu Carlos Ritter"/>
        </section>
    )
}

export default Header;