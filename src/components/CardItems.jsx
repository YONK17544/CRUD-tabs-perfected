import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardItems = ({product, handleDelete, handleEdit}) => {
  return (
    <div>
     <Card style={{ width: '18rem' }} className='m-3'>
            
            <Card.Img variant="top" style={{height:'200px'}}  src={product.thumbnail} />
            
            <Card.Body>
              <Card.Title>{product.title.length>10?product.title.slice(0,10)+'...' : product.title}</Card.Title>
              <Card.Text>
               {product.description.length>40?product.description.slice(0,40)+'...' : product.description}
              </Card.Text>
              <Button variant="primary" onClick = {(e) => {handleEdit(e, product)}}>Edit</Button>
              <Button variant="danger" className = 'ms-1' onClick = {(e) => {handleDelete(e, product.id)}}>Delete</Button>
            </Card.Body>
          </Card>
    </div>
  )
}

export default CardItems


