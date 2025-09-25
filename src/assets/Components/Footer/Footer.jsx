import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <p>Site desenvolvido por: Luccas Fernandes</p>
      <div className="icones">
        <a href="https://www.linkedin.com/in/luccas-fernandes/" target="_blank" rel="linkedin">
          <img src="/imagensFooter/Linkedin.png" alt="Ícone do LinkedIn" />
        </a>
        <a href="https://github.com/Luccasp100" target="_blank" rel="github">
          <img src="/imagensFooter/GitHub.svg" alt="Ícone do GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;