import './navbar.css'

import { BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'


export default function TopNavBar({ props }) {
  return (
    <>
      <nav className="NavBar">
        <div className="left">
          <BiUserCircle />
        </div>
        <div className="center">
          <p>{props}</p>
        </div>
        <div className="right">
          <FiSettings />
        </div>
      </nav>
    </>
  )
}