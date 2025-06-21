import React from 'react'
import './WatchCard.css'
import InnerCard from './innerCard'


function WatchCard({movie , type}) {

  return (
    <div className='card'>
        <div className='poster-card'>
            {
                movie.Poster ? <img src={movie.Poster} alt=''/> : (
        <div className='imgBox'></div>
    )        
            }
              <InnerCard movie={movie} type={type}/>
        </div>
    </div>
  )
}

export default WatchCard