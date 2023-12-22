import React, { useEffect, useState } from 'react'
import ForecastCard from '../ForecastCard/ForecastCard'
import NameCard from '../NameCard/NameCard'
import './Forecast.css'

function Forecast({ lnglat }) {
  const [placeArr, setPlaceArr] = useState([])
  const [name, setName] = useState("")
  const [lng, lat] = lnglat

  useEffect(() => {
    getForecastAll()
  }, [])

  const getForecastAll = async () => {
    const [arr, name] = await getForecast(lng, lat)
    console.log(arr)
    arr.map((place, index) => {
      const tempC = Math.round((place.main.temp - 273.15) * 10) / 10
      const date = new Date(place.dt * 1000)
      // date.setHours(date.getHours() + 9)
      const date_str = `${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}時`
      place.main.temp = tempC
      place.dt_txt = date_str
    })
    setPlaceArr(arr)
    setName(name)
  }

  return (
    <div className='main'>
      <NameCard name={name} />
      {placeArr.map((place, index) => {
        return (
          <ForecastCard
            key={index}
            time={place.dt_txt}
            temp={place.main.temp}
            icon={place.weather[0].icon}
          />
        )
      })}
    </div>
  )
}


const getForecast = (lng, lat) => {
  const token = process.env.React_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${token}`
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve([data.list, data.city.name]);
      })
  })

}

export default Forecast