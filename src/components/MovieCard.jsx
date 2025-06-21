import React from 'react'
import './MovieCard.css'
import { useMovieContext } from '../context/moviesContext'
import * as actions from '../context/actions'
function MovieCard({movie}) {
    const movieContext= useMovieContext();
    const storedWatchlist= movieContext.watchlist.find((x)=> x.imdbID === movie.imdbID);
     const storedWatched= movieContext.watched.find((x)=> x.imdbID === movie.imdbID);
     const btnWatchlist = storedWatchlist ? true : storedWatched ? true : false;
     const btnWatched = storedWatched ? true  : false;
  return (
    <div className='Card'>
        <div className='imgBox'>
{
    movie.Poster ? <img src={movie.Poster} alt=''/> : (
        <div className='imgBox'></div>
    )
}
        </div>
        <div className='info'>
            <div className='heading'>
                <h3>{movie.Title}</h3>
                <h4>{movie?.Year}</h4>
            </div>
            <div className='btns'>
                <button onClick={()=> movieContext.MoviesDispatch({
                    type: actions.ADD_MOVIE_TO_WATCHLIST,
                    payload: movie
                })} className='btn'
                disabled={btnWatchlist}>Add to Watchlist</button>
                <button onClick={()=> movieContext.MoviesDispatch({
                    type: actions.ADD_MOVIE_TO_WATCHED,
                    payload: movie
                })} className='btn'
                disabled={btnWatched}>Add to Watched</button>
            </div>
        </div>
        </div>
  )
}

export default MovieCard