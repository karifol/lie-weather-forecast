import React, { useEffect, useState } from 'react'
import ForecastCard from '../ForecastCard/ForecastCard'
import NameCard from '../NameCard/NameCard'
import './Forecast.css'

function Forecast({ lnglat, probability }) {
  const [placeArr, setPlaceArr] = useState([])
  const [name, setName] = useState("")
  const [lng, lat] = lnglat

  useEffect(() => {
    const isLie = getRandomBoolean(probability / 100)
    getForecastAll(isLie)
  }, [])

  function getRandomBoolean(probability) {
    return Math.random() < probability;
  }

  const getForecastAll = async (isLie) => {
    const [arr, name] = await getForecast(lng, lat, isLie)
    console.log(arr)
    arr.map((place, index) => {
      const tempC = Math.round((place.main.temp - 273.15) * 10) / 10
      const date = new Date(place.dt * 1000)
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

const getForecast = (lng, lat, isLie) => {
  const token = process.env.React_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${token}`
  const urlHonoruru = `https://api.openweathermap.org/data/2.5/forecast?lat=21.31&lon=-157.84&appid=${token}`
  return new Promise(async (resolve, reject) => {
    const data = await fetch(url)
      .then(res => res.json())
    fetch(urlHonoruru)
      .then(res => res.json())
      .then(data2 => {
        const arr = isLie ? data2.list : data.list
        const name = data.city.name
        resolve([arr, name])
      })
  })
}

export default Forecast