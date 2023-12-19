import React from 'react'
import './Navbar.css'

function Navbar({ place, setPlace, value, setValue }) {
  // 検索ボタンを押したときの処理
  const clickButton = () => {
    setPlace(value)
  }
  return (
    <div className='navbarContainer'>
      <div className='navbarTitle'>
        <div>嘘をつく天気予報アプリ</div>
      </div>
      <div className='navbarMenue'>
        <div className='navbarItem'>
          <input type = 'text' value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
        <div className='navbarItem'>
          <input type = 'button' value = '検索' onClick={clickButton}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar