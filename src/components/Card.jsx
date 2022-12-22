import "./Card.css";

import Button from "react-bootstrap/Button";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.src} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <Button>Ver más</Button>
        </div>
      </div>
    </>
  );
};

export default Card;
