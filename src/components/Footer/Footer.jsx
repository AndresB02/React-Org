import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://github.com/AndresB02">
          <img src="/img/github.png" alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com/in/abuitrago02/">
          <img src="/img/linkedin.png" alt="twitter" />
        </a>
        <a href="mailto:a.buitrago0210@gmail.com">
          <img src="/img/email.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>
        Desarrollado por<br></br>Andres Buitrago
      </strong>
    </footer>
  );
};

export default Footer;
