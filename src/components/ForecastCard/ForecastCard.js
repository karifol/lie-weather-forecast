import React, { useEffect, useState } from 'react'
import './ForecastCard.css'

function ForecastCard({ time, temp, icon }) {
  useEffect(() => {
    // setTemperature(temp)
  }, [])
  return (
    <div className='forecastCardContainer'>
      <div className='forecastCardTime'>{time}</div>
      <div className='forecastCardUnder'>
        <div className='forecastCardLeft'>
          <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} />
        </div>
        <div className='forecastCardRight'>
          <div className='forecastCardTemp'>{temp}℃</div>
        </div>
      </div>
    </div>
  )
}

export default ForecastCard