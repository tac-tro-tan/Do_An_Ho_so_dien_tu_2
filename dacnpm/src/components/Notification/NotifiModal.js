import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
const NotifiModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button style={{margin: "5px"}} variant="primary" onClick={handleShow}>
        {props.Title}
      </Button>

      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.Header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ color: "red", textAlign: "center" }}>{props.Content}</h5>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => {handleClose()}}>
              Huỷ
            </Button>
            <Button onClick={() => {handleClose();props.handleSubmit()}} variant="primary" type="submit">
              Gửi
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NotifiModal;
