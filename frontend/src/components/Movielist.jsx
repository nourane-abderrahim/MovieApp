import React from 'react'
import Moviecards from './Moviecards.jsx'
import AddMovie from './AddMovie.jsx'
import UpdateMovie from './UpdateMovie.jsx';
const Movielist = ({movies,setmovies, fetchData,text}) => {

  return (
    <div>

    <div><AddMovie movies={movies} setmovies={setmovies} fetchData={fetchData} />
    </div>
    <div className='container'>
      {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el, i) => (
        <Moviecards el={el} key={i} movies={movies} setmovies={setmovies} fetchData={fetchData} />
      )).reverse()}
    </div>
    </div>
  );
};

export default Movielist
