import React, { useEffect, useState } from 'react'
import './AddMovie.css'
import { getmovie } from '../api';
import MovieCard from './MovieCard';

function AddMovie() {
  const [search , setSearch]=useState('');
  const [movies , setMovies]=useState([]);
  useEffect(()=>{
if(search.trim == "") return;
const getData= async () => {
  const result = await getmovie(search)
  setMovies(result);
}
getData();
  },[search])
  return (
    <div className='add-page'>
        <div className='container'>
            <div className='add-content'>
                <div className='input-container'>
                    <input type='text'
                     placeholder='Search your favorite movie'
                      value={search}
                       onChange={(e)=>setSearch(e.target.value)}/>
                </div>
                {
                  movies.length>0 && (
 <ul className='search-results'>
  {
    movies.map((movie)=> (<li key={movie.imdbID}>
      <MovieCard movie={movie}/>
    </li>))
  }
 </ul>
                  )
                }
               
            </div>
        </div>
    </div>
  )
}

export default AddMovie