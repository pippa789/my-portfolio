import React, {useState} from 'react';
import Modal from 'react-modal';

function Modal1() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
      <>
      <Modal isOpen={modalOpen}>
        <p>Hiya!</p>
        <button onClick={() => setModalOpen(false)}>close</button>
         <a href="https://pippa789.github.io/calculator/" target="_blank" rel="noreferrer">
         <button>visit site</button> 
          </a>
      </Modal>
      </>
  )
}

export default Modal1