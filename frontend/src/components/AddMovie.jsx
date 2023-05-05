
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
const AddMovie = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [newmovie, setnewmovie] = useState({
  name:"",
  posterurl:"",
  description:"",
  rating:"",
 });
 const add = ()=> {
  
  axios.post('http://localhost:3000/api/movie',newmovie)
  .then((response)=>console.log(response))
  .then(() => props.fetchData())
  .catch((err)=>console.log(err))
 }
  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{background:"red",border:"none"}} className='btn1'>
        Add Movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Name" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie image" onChange={(e)=>setnewmovie({...newmovie,posterurl:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Movie Description" onChange={(e)=>setnewmovie({...newmovie, description:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movie rating" onChange={(e)=>setnewmovie({...newmovie,rating:e.target.value})}/>
      </Form.Group>

     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  style={{background:"red",border:"none"}}
          onClick ={() => {add();handleClose()}}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal> 
    </div>
  )
}

export default AddMovie
