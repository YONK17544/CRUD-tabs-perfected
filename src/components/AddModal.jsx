import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const AddModal = ({showAdd, handleAddClose, handleSubmit, handleAddChanges}) => {
  return (
    <div>
         <Modal show={showAdd} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type = "text" className = "form-control" name = "title" placeholder = "Product Title" onChange = {(e) =>{handleAddChanges(e)}}></input></Modal.Body>
        <Modal.Body><input type = "text" className = "form-control" name = "description" placeholder = "Product Description"  onChange = {(e) =>{handleAddChanges(e)}}></input></Modal.Body>
        <Modal.Body><input type = "text" className = "form-control" name = "thumbnail" placeholder = "Product Thumbnail" onChange = {(e) =>{handleAddChanges(e)}}></input></Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => {handleSubmit(e)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>   
    </div>
  )
}

export default AddModal
