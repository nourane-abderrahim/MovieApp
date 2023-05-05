import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  React,{useState,useEffect} from 'react';
import axios from 'axios'
import Movielist from './components/Movielist.jsx';
import Navigation from './components/Navigation.jsx';

function App() {
  const [movies, setmovies] = useState([])
const fetchData=()=>{
  axios.get('http://localhost:3000/api/movie')
  .then(response=>{
    setmovies(response.data)
    console.log(response)}
    )
  .catch(error=>console.log(error))
}
useEffect(()=>{
  fetchData()
},[])
const [text, settext] = useState("");
  return (
    <div className='app'>
      <Navigation settext={settext} />
      <Movielist movies={movies} setmovies={setmovies} fetchData={fetchData} text={text}/>
       
    
    </div>
  );
}

export default App;
