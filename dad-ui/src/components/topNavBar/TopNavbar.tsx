"use client";

import Link from 'next/link'
import './topnavbar.css'
import { BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { IconContext } from "react-icons";

export default function TopNavBar({ title }: { title: string }) {
  return (
    <>
      <nav className="NavBar">
        <div className='menu'>
          <div className="left">
            <Link href="/user">
              <IconContext.Provider value={{ className: "userIcon color" }}>
                <BiUserCircle />
              </IconContext.Provider>
            </Link>
          </div>
          <strong className="title color">{title}</strong>
          <div className="right">
            <Link href="/settings">
              <IconContext.Provider value={{ className: "settingsIcon color" }}>
                <FiSettings classname="settings" />
              </IconContext.Provider>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}