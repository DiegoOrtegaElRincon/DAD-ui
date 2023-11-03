import React from 'react'
import Layout from '../layout'
import './main.css'
import TopNavBar from '../../components/topNavBar/TopNavbar'
import BottomNavBar from '../../components/bottomNavBar/BottomNavbar'
export default function MainPage() {
    return (
        <>
            <TopNavBar title='Competitive Matches'/>
            <div className="container">
                <div className="box box1">
                    <div className="content">
                        <div className='top'>Competicion</div>
                        <div className='bottom'>
                            <div className='team1'>
                                <div className='team-picture'>team picture1</div>
                                <div className='team-name'>team picture1</div>
                            </div>
                            <div className='schedule'>
                                <div className='day'>Day</div>
                                <div className='hour'>Hour</div>
                            </div>
                            <div className='team2'>
                                <div className='team-picture'>team picture2</div>
                                <div className='team-name'>team picture2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box box2">
                <div className="content">
                        <div className='top'>Competicion</div>
                        <div className='bottom'>
                            <div className='team1'>
                                <div className='team-picture'>team picture1</div>
                                <div className='team-name'>team name1</div>
                            </div>
                            <div className='schedule'>
                                <div className='day'>Day</div>
                                <div className='hour'>Hour</div>
                            </div>
                            <div className='team2'>
                                <div className='team-picture'>team picture2</div>
                                <div className='team-name'>team name2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box box3">
                <div className="content">
                        <div className='top'>Competicion</div>
                        <div className='bottom'>
                            <div className='team1'>
                                <div className='team-picture'>team picture1</div>
                                <div className='team-name'>team picture1</div>
                            </div>
                            <div className='schedule'>
                                <div className='day'>Day</div>
                                <div className='hour'>Hour</div>
                            </div>
                            <div className='team2'>
                                <div className='team-picture'>team picture2</div>
                                <div className='team-name'>team picture2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box box4">
                <div className="content">
                        <div className='top'>Competicion</div>
                        <div className='bottom'>
                            <div className='team1'>
                                <div className='team-picture'>team picture1</div>
                                <div className='team-name'>team picture1</div>
                            </div>
                            <div className='schedule'>
                                <div className='day'>Day</div>
                                <div className='hour'>Hour</div>
                            </div>
                            <div className='team2'>
                                <div className='team-picture'>team picture2</div>
                                <div className='team-name'>team picture2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box box5">
                <div className="content">
                        <div className='top'>Competicion</div>
                        <div className='bottom'>
                            <div className='team1'>
                                <div className='team-picture'>team picture1</div>
                                <div className='team-name'>team picture1</div>
                            </div>
                            <div className='schedule'>
                                <div className='day'>Day</div>
                                <div className='hour'>Hour</div>
                            </div>
                            <div className='team2'>
                                <div className='team-picture'>team picture2</div>
                                <div className='team-name'>team picture2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavBar/>
        </>
    )
}