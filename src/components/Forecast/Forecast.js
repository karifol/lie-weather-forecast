import React from 'react'

function Forecast({ place }) {
  
  return (
    <div>Forecast</div>
  )
}

const getForecast = async (lng, lat) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

export default Forecast