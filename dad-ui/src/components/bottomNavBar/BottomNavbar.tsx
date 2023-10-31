"use client";
import './bottomnavbar.css'
import { HiHome } from 'react-icons/hi2'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbNews } from 'react-icons/tb'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import Link from 'next/link'
import { IconContext } from 'react-icons'

export default function BottomNavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className='menu'>
          <div className='home'>
            <Link href="/">
              <IconContext.Provider value={{ className: "homeStyle color" }}>
                <HiHome />
              </IconContext.Provider>
            </Link>
          </div>
          <div className='statistics'>
            <Link href="/statistics">
              <IconContext.Provider value={{ className: "statisticsStyle color" }}>
                <SiGoogleanalytics />
              </IconContext.Provider>
            </Link>
          </div>
          <div className='news'>
            <Link href="/news">
              <IconContext.Provider value={{ className: "newsStyle color" }}>
                <TbNews />
              </IconContext.Provider>
            </Link>
          </div>
          <div className='strats'>
            <Link href="/strats">
              <IconContext.Provider value={{ className: "stratsStyle color" }}>
                <BsFillGrid3X3GapFill />
              </IconContext.Provider>
            </Link>
          </div>
          <div className='matches'>
            <Link href="pages/(Layout)/Matches">
              <IconContext.Provider value={{ className: "matchesStyle color" }}>
                <TfiLayoutListThumb />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}