import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./Confirmation.module.css"
import { Form } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import ConfirmationForm from './Confirmation';


function ConfirmationModal({setModal}) {
    return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton >
            <Modal.Title>Contacto</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
          <ConfirmationForm/>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
  
  export default ConfirmationModal;