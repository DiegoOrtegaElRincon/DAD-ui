import BottomNavbar from "../../components/bottomnavbar/BottomNavBar";
import TopNavbar from "../../components/topnavbar/TopNavbar";
import './home.css'
import C9 from '../../public/images/Cloud9_logo.webp'
import Faze from '../../public/images/FaZe_Clan_logo.webp'
import FPX from '../../public/images/FunPlus_Phoenix_logo.webp'
import FUT from '../../public/images/Futbolist_logo.webp'
import G2 from '../../public/images/G2_Esports_logo.webp'
import KRU from '../../public/images/KR _Esports_logo.webp'
import NRG from '../../public/images/NRG_Esports_logo.webp'
import PRX from '../../public/images/Paper_Rex_logo.webp'
import TL from '../../public/images/Team_Liquid_logo.webp'
import UCAM from '../../public/images/UCAM_Esports_Club_logo.png'


const Home = () => {

    const logos = {
        Cloud9: "../../public/images/UCAM_Esports_Club_logo.png"
    }

    return (
        <div className='main-container'>
            <TopNavbar props='Competitive Matches' />
            <div className="container">
                <div className="box box1">
                    <div className='top'>Competicion</div>
                    <div className='bottom'>
                        <div className='team1'>
                            <div className='team-picture'>
                                <img src={C9} />
                            </div>
                            <div className='team-name'>C9</div>
                        </div>
                        <div className='schedule'>
                            <div className='day'>Day</div>
                            <div className='hour'>Hour</div>
                        </div>
                        <div className='team2'>
                            <div className='team-picture'>
                                <img src={FPX} />
                            </div>
                            <div className='team-name'>FPX</div>
                        </div>
                    </div>
                </div>
                <div className="box box2">
                    <div className='top'>Competicion</div>
                    <div className='bottom'>
                        <div className='team1'>
                            <div className='team-picture'>
                                <img src={G2} />
                            </div>
                            <div className='team-name'>G2</div>
                        </div>
                        <div className='schedule'>
                            <div className='day'>Day</div>
                            <div className='hour'>Hour</div>
                        </div>
                        <div className='team2'>
                            <div className='team-picture'>
                                <img src={Faze} />
                            </div>
                            <div className='team-name'>FAZE</div>
                        </div>

                    </div>
                </div>
                <div className="box box3">
                    <div className='top'>Competicion</div>
                    <div className='bottom'>
                        <div className='team1'>
                            <div className='team-picture'>
                                <img src={FUT} />
                            </div>
                            <div className='team-name'>FUT</div>
                        </div>
                        <div className='schedule'>
                            <div className='day'>Day</div>
                            <div className='hour'>Hour</div>
                        </div>
                        <div className='team2'>
                            <div className='team-picture'>
                                <img src={KRU} />
                            </div>
                            <div className='team-name'>KRU</div>
                        </div>
                    </div>
                </div>
                <div className="box box4">
                    <div className='top'>Competicion</div>
                    <div className='bottom'>
                        <div className='team1'>
                            <div className='team-picture'>
                                <img src={NRG} />
                            </div>
                            <div className='team-name'>NRG</div>
                        </div>
                        <div className='schedule'>
                            <div className='day'>Day</div>
                            <div className='hour'>Hour</div>
                        </div>
                        <div className='team2'>
                            <div className='team-picture'>
                                <img src={PRX} />
                            </div>
                            <div className='team-name'>PRX</div>
                        </div>
                    </div>

                </div>
                <div className="box box5">
                    <div className='top'>Competicion</div>
                    <div className='bottom'>
                        <div className='team1'>
                            <div className='team-picture'>
                                <img src={UCAM} />
                            </div>
                            <div className='team-name'>UCAM</div>
                        </div>
                        <div className='schedule'>
                            <div className='day'>Day</div>
                            <div className='hour'>Hour</div>
                        </div>
                        <div className='team2'>
                            <div className='team-picture'>
                                <img src={TL} />
                            </div>
                            <div className='team-name'>TL</div>
                        </div>
                    </div>

                </div>
            </div>
            <BottomNavbar />
        </div>
    )
}

export default Home;