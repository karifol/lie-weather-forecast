import React from 'react'
import './NameCard.css'

function NameCard({ place, setPlace }) {
  return (
    <div className='cardName-container'>
      <div className='cardName'>{place}</div>
    </div>
  )
}

export default NameCard