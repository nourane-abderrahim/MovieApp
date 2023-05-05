import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import UpdateMovie from './UpdateMovie.jsx';
import axios from 'axios';

const Moviecards=({el,movies,setmovies, fetchData}) =>{
  const [show,setShow]=useState(false)

  const handleDelete = async () => {
    try {
      console.log(el)
      const response = await axios.delete(`http://localhost:3000/api/delete/${el._id}`)
      console.log(response.data)

      const newMovies =movies.filter(movie => movie._id != el._id);
      setmovies(newMovies)
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div>
      <Card style={{ width: '18rem',background:"black" ,margin:"20px 10px", position:"static"}} className='moviecard'>
      <Card.Img variant="top" src={el.posterurl} style={{minHeight:"250px" ,maxHeight:"250px"}}/>
      <Card.Body>
        <Card.Title style={{color:"red"}}>{el.name}</Card.Title>
        <Card.Text style={{minHeight:"220px", maxHeight:"220px", font:"justify"}}>
          {el.description}
          <div className='starss'><ReactStars  count={5} size={24} activeColor="#ffd700" edit={false} value={el.rating}/> 
          
          </div>
         
          </Card.Text>
          <div className='button-group'>
  <button style={{backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', marginRight: '10px', cursor: 'pointer'}} onClick={() => handleDelete(el.id)}>X</button>
  <button style={{backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer'}} onClick={() => setShow(!show)}>Edit</button>
</div>
</Card.Body>
</Card>
    {show && <UpdateMovie movie={el} setmovies={setmovies} fetchData={fetchData} />}
    </div>
  )
}
export default Moviecards

  