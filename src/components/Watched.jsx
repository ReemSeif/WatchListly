import React from 'react'
import { useMovieContext } from '../context/moviesContext';
import './Home.css'
import WatchCard from './WatchCard';

function Watched() {
  const movieContext= useMovieContext();
  return (
   <div className='watchlist'>
      <div className=''>
        <div className='headings'>
          <h1>Watched</h1>
          <span className='count'>{movieContext.watched.length} {movieContext.watched.length === 1 ? 'movie' : 'movies' }</span>
        </div>
        
          {
movieContext.watched.length > 0 ? (
  <div className='movies-grid'>
    {
      movieContext.watched.map((movie)=> (
        <WatchCard key={movie.imdbID} movie={movie} type="watched" />
      ))
    }
  </div>
):<h2> No movies yet</h2>
          }
        </div>
      </div>
  )
}

export default Watched