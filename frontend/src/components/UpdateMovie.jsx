import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const UpdateMovie = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedMovie, setUpdatedMovie] = useState({
    name: props.movie ? props.movie.name : "",
    posterurl: props.movie ? props.movie.posterurl : "",
    description: props.movie ? props.movie.description : "",
    rating: props.movie ? props.movie.rating : "",
  });

  const update = () => {
    axios
      .put(`http://localhost:3000/api/update/${props.movie._id}`, updatedMovie)
      .then((response) => console.log(props.movies))
      .then(() => props.fetchData())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{ background: "red", border: "none" }} className='btn1'>
        Update Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie Name"
                value={updatedMovie.name}
                onChange={(e) => setUpdatedMovie({ ...updatedMovie, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie image"
                value={updatedMovie.posterurl}
                onChange={(e) => setUpdatedMovie({ ...updatedMovie, posterurl: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie Description"
                value={updatedMovie.description}
                onChange={(e) => setUpdatedMovie({ ...updatedMovie, description: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter movie rating"
                value={updatedMovie.rating}
                onChange={(e) => setUpdatedMovie({ ...updatedMovie, rating: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{ background: "red", border: "none" }} onClick={() => { update(); handleClose() }}>
            Update
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
)}

export default UpdateMovie