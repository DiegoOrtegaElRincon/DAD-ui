import './bottomnavbar.css'
import { HiHome } from 'react-icons/hi2'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbNews } from 'react-icons/tb'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { TfiLayoutListThumb } from 'react-icons/tfi'

export default function BottomNavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className='menu'>
          <div className='home'>
            <HiHome className="homeStyle color" href='/' />
          </div>
          <div className='statistics'>
            <SiGoogleanalytics className="statisticsStyle color" href='/statistics' />
          </div>
          <div className='news'>
            <TbNews className="newsStyle color" href='/news' />
          </div>
          <div className='strats'>
            <BsFillGrid3X3GapFill className="stratsStyle color" href='/strats' />
          </div>
          <div className='matches'>
            <TfiLayoutListThumb className="matchesStyle color" href='matches' />
          </div>
        </div>
      </nav>
    </>
  )
}