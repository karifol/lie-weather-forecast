import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className='navbarTitle'>
        <div>嘘をつく天気予報アプリ</div>
      </div>
      <div className='navbarMenue'>
        <div className='navbarItem'>
          <input type = 'text' placeholder = '都市名を入力してください' />
        </div>
        <div className='navbarItem'>
          <input type = 'button' value = '検索' onClick={serch}/>
        </div>
      </div>
    </div>
  )
}

// 検索ボタンを押したときの処理
const serch = () => {
  console.log('検索ボタンが押されました');
}

export default Navbar