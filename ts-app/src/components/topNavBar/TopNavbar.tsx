import './topnavbar.css'
import { BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'

export default function TopNavBar({ title }: { title: string }) {
  return (
    <>
      <nav className="NavBar">
        <div className='menu'>
          <div className="left">
            <BiUserCircle className="userIcon color" href="/user" />
          </div>
          <strong className="title color">{title}</strong>
          <div className="right">
            <FiSettings className="settingsIcon color" href="/settings" />
          </div>
        </div>
      </nav>
    </>
  )
}