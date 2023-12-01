import React, { useState } from 'react';
import './navbar.css';
import { BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

type TopNavbarProps = {
  props: string;
};

const TopNavbar: React.FC<TopNavbarProps> = ({ props }) => {
  const [isUserCircleSelected, setIsUserCircleSelected] = useState(false);

  const handleUserCircleClick = () => {
    setIsUserCircleSelected(!isUserCircleSelected);
  };

  return (
    <>
      <nav className={`NavBar ${isUserCircleSelected ? 'selected' : ''}`}>
        <div className="left" onClick={handleUserCircleClick}>
          <NavLink to="/profile" className="active-link">
            <BiUserCircle />
          </NavLink>
        </div>
        <div className="center">
          <p>{props}</p>
        </div>
        <div className="right" onClick={handleUserCircleClick}>
          <NavLink to="/settings" className="active-link">
            <FiSettings />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
