import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./Confirmation.module.css"
import { Form } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import ConfirmationForm from './Confirmation';


function ConfirmationModal({setShow}) {
  const handleClose = () => setShow(false);
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal style={{ padding: '0' }} show="true" onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Contacto</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            <ConfirmationForm/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
  
  export default ConfirmationModal;