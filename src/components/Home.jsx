import React from 'react'
import { useMovieContext } from '../context/moviesContext'
import WatchCard from './WatchCard';
import './Home.css'
function Home() {
  const movieContext= useMovieContext();
  return (
    <div className='watchlist'>
      <div className=''>
        <div className='headings'>
          <h1>My Watchlist</h1>
          <span className='count'>{movieContext.watchlist.length} {movieContext.watchlist.length === 1 ? 'movie' : 'movies' }</span>
        </div>
        
          {
movieContext.watchlist.length > 0 ? (
  <div className='movies-grid'>
    {
      movieContext.watchlist.map((movie)=> (
        <WatchCard key={movie.imdbID} movie={movie} type="watchlist" />
      ))
    }
  </div>
):<h2> No movies yet</h2>
          }
        </div>
      </div>
  )
}

export default Home