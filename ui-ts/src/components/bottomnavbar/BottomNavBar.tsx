import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './bottomnavbar.css';
import { HiHome } from 'react-icons/hi2';
import { SiGoogleanalytics } from 'react-icons/si';
import { TbNews } from 'react-icons/tb';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { TfiLayoutListThumb } from 'react-icons/tfi';

const BottomNavbar = () => {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const handleIconHover = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  const handleIconLeave = () => {
    setSelectedIcon(null);
  };

  return (
    <nav className="BottomNavBar">
      <div
        className={`home ${selectedIcon === 'home' ? 'selected' : ''}`}
        onClick={() => handleIconClick('home')}
        onMouseEnter={() => handleIconHover('home')}
        onMouseLeave={handleIconLeave}
      >
        <Link to="/">
          <HiHome className="icon" />
        </Link>
      </div>
      <div
        className={`statistics ${selectedIcon === 'statistics' ? 'selected' : ''}`}
        onClick={() => handleIconClick('statistics')}
        onMouseEnter={() => handleIconHover('statistics')}
        onMouseLeave={handleIconLeave}
      >
        <Link to="/statistics">
          <SiGoogleanalytics className="icon" />
        </Link>
      </div>
      <div
        className={`news ${selectedIcon === 'news' ? 'selected' : ''}`}
        onClick={() => handleIconClick('news')}
        onMouseEnter={() => handleIconHover('news')}
        onMouseLeave={handleIconLeave}
      >
        <Link to="/news">
          <TbNews className="icon" />
        </Link>
      </div>
      {/* <div
        className={`strats ${selectedIcon === 'strats' ? 'selected' : ''}`}
        onClick={() => handleIconClick('strats')}
        onMouseEnter={() => handleIconHover('strats')}
        onMouseLeave={handleIconLeave}
      >
        <Link to="/strats">
          <BsFillGrid3X3GapFill className="icon" />
        </Link>
      </div> */}
      <div
        className={`matches ${selectedIcon === 'matches' ? 'selected' : ''}`}
        onClick={() => handleIconClick('matches')}
        onMouseEnter={() => handleIconHover('matches')}
        onMouseLeave={handleIconLeave}
      >
        <Link to="/matches">
          <TfiLayoutListThumb className="icon" />
        </Link>
      </div>
    </nav>
  );
};

export default BottomNavbar;
