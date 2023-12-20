import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

function Map() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FpdG8wNTAyIiwiYSI6ImNsNmRiZG42aTI2dzkzZW8xYnh6MjZ0ZTIifQ.x92zPsPkjOTIZTmLY-j4vA';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [139.6917, 35.6895],
      zoom: 9
    });

    return () => map.remove(); // コンポーネントのアンマウント時に地図を削除
  }, []); // 空の依存配列を指定して、このエフェクトを一度だけ実行

  return <div id="map" style={{ width: '100vw', height: '100vh' }}></div>;
}

export default Map;