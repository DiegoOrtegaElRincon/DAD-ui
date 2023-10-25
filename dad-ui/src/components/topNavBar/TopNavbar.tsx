import Link from 'next/link'
import './topnavbar.css'

import { BiUserCircle } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'


export default function TopNavBar({ title }: { title: string }) {
  return (
    <>
      <nav className="NavBar">
        <div className='menu'>
          <div className="left">
            <Link href="/user"><BiUserCircle size={30} /></Link>
          </div>
          <div className="center">
            <strong>{title}</strong>
          </div>
          <div className="right">
            <Link href="/settings"><FiSettings size={30} /></Link>
          </div>
        </div>
      </nav>
    </>
  )
}