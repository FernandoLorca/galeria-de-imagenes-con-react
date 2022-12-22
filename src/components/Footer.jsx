import Button from "react-bootstrap/Button";

import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="mainFooter">
      <p>Revisa otros sitios con temas relacionados al camping</p>
      <div className="mainFooter__btns">
        <div className="mainFooter__btns">
          <Button>Mejores carpas</Button>
          <Button>Mejores snacks para camping</Button>
          <Button>Zapatillas para trecking</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
