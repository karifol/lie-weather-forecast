import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import Probability from '../Probability/Probability';

function Map( { lnglat, setLnglat, value, setValue, probability }) {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FpdG8wNTAyIiwiYSI6ImNsNmRiZG42aTI2dzkzZW8xYnh6MjZ0ZTIifQ.x92zPsPkjOTIZTmLY-j4vA';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [139.6917, 35.6895],
      zoom: 7
    });
    // クリックでマーカーを設置
    map.on("click", (e) => {
      if (window.marker) {
        window.marker.remove();
      }
      const lngLat = e.lngLat;
      window.marker = new mapboxgl.Marker()
        .setLngLat(lngLat)
        .addTo(map);
      // 丸める
      lngLat.lat = Math.round(lngLat.lat * 100) / 100;
      lngLat.lng = Math.round(lngLat.lng * 100) / 100;
      document.getElementsByClassName("latlng")[0].innerHTML = `緯度：${lngLat.lat}`;
      document.getElementsByClassName("latlng")[1].innerHTML = `経度：${lngLat.lng}`;
      setLnglat([lngLat.lng, lngLat.lat]);
    })

    return () => map.remove();
  }, []);

  const serch = () => {
    setValue("検索");
  }

  return (
    <>
      <div className="title">噓をつく天気予報</div>
      <Probability {...{ probability }}/>
      <div className='info'>
        <div className='latlng'>緯度：</div>
        <div className='latlng'>経度：</div>
      </div>
      <button onClick={serch}>検索</button>
      <div className="map-container">
        <div id="map"></div>
      </div>
    </>
  );
  
}

export default Map;