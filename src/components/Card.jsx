const Card = (props) => {
  return (
    <>
      {/* <div>
        <img src={props.src} alt="" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div> */}
      <div className="card">
        <img src={props.src} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
