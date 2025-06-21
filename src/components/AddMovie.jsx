import React, { useEffect, useState } from 'react'
import './AddMovie.css'
import axios from 'axios';
import MovieCard from './MovieCard';

function AddMovie() {
  const [search , setSearch]=useState('');
  const [movies , setMovies]=useState([]);
  useEffect(()=>{
axios.get(`http://www.omdbapi.com/?s=${search}&apikey=77177e0`).then((response)=>{
 if(response.data.Search){
  setMovies(response.data.Search);
  console.log(response.data.Search)
 }
}).catch((error)=> console.log(error));
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