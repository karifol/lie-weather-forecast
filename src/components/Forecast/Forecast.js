import React from 'react'

function Forecast({ lnglat }) {
  const [lng, lat] = lnglat
  getForecast(lng, lat)
  
  return (
    <div>Forecast</div>
  )
}

const getForecast = async (lng, lat) => {
  const token = 
  console.log(lng, lat)
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${token}`
  console.log(url)
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

export default Forecast