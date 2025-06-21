import React from 'react'
import './WatchCard.css'
import { FaEye } from "react-icons/fa";
import { LuEyeOff } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { useMovieContext } from '../context/moviesContext';
import * as actions from '../context/actions'
function InnerCard({ movie, type }) {
    const moviesContext = useMovieContext();
    return (
        <div className='innerCard'>
            {
                type === 'watchlist' ?
                    <button onClick={() => moviesContext?.MoviesDispatch({
                        type: actions.MOVE_MOVIE_TO_WATCHED,
                        payload: movie
                    })} className='btn-ctrl'>
                        <FaEye />
                    </button>
                    : <button onClick={() => moviesContext?.MoviesDispatch({
                        type: actions.MOVE_MOVIE_TO_WATCHLIST,
                        payload: movie
                    })

                    } className='btn-ctrl'>
                        <LuEyeOff /></button>
            }
            <button
                onClick={() => {
                    type === 'watchlist'
                        ? moviesContext.MoviesDispatch({
                            type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                            payload: movie.imdbID
                        })
                        : moviesContext.MoviesDispatch({
                            type: actions.REMOVE_MOVIE_FROM_WATCHED,
                            payload: movie.imdbID
                        });
                }}
                className="btn-ctrl"
            >
                <IoCloseSharp />
            </button>


        </div>
    )
}

export default InnerCard