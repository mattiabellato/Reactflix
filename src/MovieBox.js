import { Modal, show, Button } from "react-bootstrap";
import React, { useState } from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  titel,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body bg-info">
        <img className="card-img-top" src={API_IMG + poster_path} />
        <div className="card-body">
          <button type="button" className="btn btn-light" onClick={handleShow}>
            Scopri di più{" "}
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                style={{ width: "24em" }}
                src={API_IMG + poster_path}
              />
              <h3>{titel}</h3>
              <h4>Votazione: {vote_average}</h4>
              <h5>Data di uscita: {release_date}</h5>
              <br></br>
              <h6>La trama</h6>
              <p>{overview}</p>
              <button className="like bg-info">Mi piace questo film</button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
