import './topnavbar.css'
import { BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { IconContext } from "react-icons";
import React from 'react';

export default function TopNavBar({ title }: { title: string }) {
  return (
    <>
      <nav className="NavBar">
        <div className='menu'>
          <div className="left">
            <link href="/user">
              <IconContext.Provider value={{ className: "userIcon color" }}>
                <BiUserCircle />
              </IconContext.Provider>
            </link>
          </div>
          <strong className="title color">{title}</strong>
          <div className="right">
            <link href="/settings">
              <IconContext.Provider value={{ className: "settingsIcon color" }}>
                <FiSettings className="settings" />
              </IconContext.Provider>
            </link>
          </div>
        </div>
      </nav>
    </>
  )
}