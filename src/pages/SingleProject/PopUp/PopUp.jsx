import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import "./PopUp.css";

const PopUp = ({ src, alt, caption }) => {
  const [show, setShow] = useState(false);

  //Modal display toggle handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <span variant="primary" onClick={handleShow}>
        <div className="single-project-img-wrapper">
          <img src={src} alt={alt} />
        </div>
      </span>

      <Modal show={show} onHide={handleClose}>
        <i onClick={handleClose} className="fas fa-times modal-close-icon"></i>
        <img className="modal-image" src={src} alt={alt} />
        <div className="caption-wrapper p-4">
          <p className="mb-0">{caption}</p>
          <button onClick={handleClose} className="modal-close-button">
            Close
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default PopUp;
