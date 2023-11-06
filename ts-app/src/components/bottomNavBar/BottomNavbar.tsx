import './bottomnavbar.css'
import { HiHome } from 'react-icons/hi2'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbNews } from 'react-icons/tb'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import { IconContext } from 'react-icons'
import React from 'react'

export default function BottomNavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className='menu'>
          <div className='home'>
            <link href="/">
              <IconContext.Provider value={{ className: "homeStyle color" }}>
                <HiHome />
              </IconContext.Provider>
            </link>
          </div>
          <div className='statistics'>
            <link href="/statistics">
              <IconContext.Provider value={{ className: "statisticsStyle color" }}>
                <SiGoogleanalytics />
              </IconContext.Provider>
            </link>
          </div>
          <div className='news'>
            <link href="/news">
              <IconContext.Provider value={{ className: "newsStyle color" }}>
                <TbNews />
              </IconContext.Provider>
            </link>
          </div>
          <div className='strats'>
            <link href="/strats">
              <IconContext.Provider value={{ className: "stratsStyle color" }}>
                <BsFillGrid3X3GapFill />
              </IconContext.Provider>
            </link>
          </div>
          <div className='matches'>
            <link href="pages/(Layout)/Matches">
              <IconContext.Provider value={{ className: "matchesStyle color" }}>
                <TfiLayoutListThumb />
              </IconContext.Provider>
            </link>
          </div>
        </div>
      </nav>
    </>
  )
}