import './bottomnavbar.css'
import { HiHome } from 'react-icons/hi2'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbNews } from 'react-icons/tb'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import Link from 'next/link'

export default function BottomNavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className='menu'>
          <div className='home'>
            <Link href="/"><HiHome size={30} /></Link>
          </div>
          <div className='statistics'>
            <Link href="/statistics"><SiGoogleanalytics size={30} /></Link>
          </div>
          <div className='news'>
            <Link href="/news"><TbNews size={30} /></Link>
          </div>
          <div className='strats'>
            <Link href="/strats"><BsFillGrid3X3GapFill size={30} /></Link>
          </div>
          <div className='matches'>
            <Link href="/matches"><TfiLayoutListThumb size={30} /></Link>
          </div>
        </div>
      </nav>
    </>
  )
}