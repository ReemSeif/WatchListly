import React from 'react'
import './AddMovie.css'
function AddMovie() {
  return (
    <div className='add-page'>
        <div className='container'>
            <div className='add-content'>
                <div className='input-container'>
                    <input type='text' placeholder='Search your favorite movie'/>
                </div>
                <ul className='search-results'></ul>
            </div>
        </div>
    </div>
  )
}

export default AddMovie