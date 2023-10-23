import './navbar.css'
import { HiHome } from 'react-icons/hi2'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbNews } from 'react-icons/tb'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { TfiLayoutListThumb } from 'react-icons/tfi'

export default function BottomNavBar() {
  return (
    <>
    <nav className="NavBar">
      <HiHome/>
      <SiGoogleanalytics/>
      <TbNews/>
      <BsFillGrid3X3GapFill/>
      <TfiLayoutListThumb/>
    </nav>
    </>
  )
}