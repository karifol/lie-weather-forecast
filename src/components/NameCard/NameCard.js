import React from 'react'
import './NameCard.css'

function NameCard({ name }) {
  return (
    <div className='cardName-container'>
      <div className='cardName'>{name}</div>
    </div>
  )
}

export default NameCard