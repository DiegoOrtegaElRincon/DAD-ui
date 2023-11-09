import './topnavbar.css'
import { BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

export default function TopNavBar({ title }: { title: string }) {
  return (
    <>
      <nav className="TopNavBar">
        <div className='top-menu'>
          <div className="top-left">
            <a href="/user" className="color">
              <BiUserCircle className="userIcon" />
            </a>
          </div>
          <strong className="title color">{title}</strong>
          <div className="top-right">
            <a href="/settings" className="color">
              <FiSettings className="settingsIcon" />
            </a>
          </div>
        </div>
      </nav>
      <div className='top-container'/>
    </>
  )
}