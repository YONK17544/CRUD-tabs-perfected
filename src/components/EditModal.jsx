import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const EditModal = ({show, handleClose, product, handleChanges, handleEditChanges}) => {
  return (
    <div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type = "text" className = "form-control" name = "title" placeholder = "Product Title" value = {product.title} onChange = {(e) =>{handleChanges(e)}}></input></Modal.Body>
        <Modal.Body><input type = "text" className = "form-control" name = "description" placeholder = "Product Description" value = {product.description}  onChange = {(e) =>{handleChanges(e)}}></input></Modal.Body>
        <Modal.Body><input type = "text" className = "form-control" name = "thumbnail" placeholder = "Product Thumbnail" value = {product.thumbnail}  onChange = {(e) =>{handleChanges(e)}}></input></Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => {handleEditChanges(e)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>   
    </div>
  )
}

export default EditModal


