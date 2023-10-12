import React from 'react';
import Menu from '../menu.png';

const Header = () => {
  return (
    <header className='header'>
        <div className="logo text-color-white">Startup 3</div>
        <div className="menu cursor" ><img src={Menu} alt="" /></div>
        <div className="header-pages">
            <div className="overview text-color-grey">Overview</div>
            <div className="prices text-color-white">Prices</div>
            <div className="blog text-color-white">Blog</div>
            <div className="feedback text-color-white">Feedback</div>
            <div className='purchase cursor'><p className='purchase-p'>Purchase</p></div>
        </div>
    </header>
  )
}

export default Header