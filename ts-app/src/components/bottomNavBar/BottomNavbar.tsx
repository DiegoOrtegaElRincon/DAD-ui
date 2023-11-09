import './bottomnavbar.css'
import { HiHome } from 'react-icons/hi2'
import { SiGoogleanalytics } from 'react-icons/si'
import { TbNews } from 'react-icons/tb'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import { Link } from 'react-router-dom';

export default function BottomNavBar() {
  return (
    <nav className="BottomNavBar">
      <div className='bottom-menu'>
        <div className='home'>
          <Link to="/">
            <HiHome className="homeStyle color" />
          </Link>
        </div>
        <div className='statistics'>
          <Link to="/statistics">
            <SiGoogleanalytics className="statisticsStyle color" />
          </Link>
        </div>
      </div>
      <div className='news'>
        <Link to="/news">
          <TbNews className="newsStyle color" />
        </Link>
      </div>
      <div className='strats'>
        <Link to="/strats">
          <BsFillGrid3X3GapFill className="stratsStyle color" />
        </Link>
      </div>
      <div className='matches'>
        <Link to="/matches">
          <TfiLayoutListThumb className="matchesStyle color" />
        </Link>
      </div>
    </nav >
  );
}