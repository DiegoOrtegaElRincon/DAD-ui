// App.tsx

import React from 'react';
import TopNavbar from '../../components/topnavbar/TopNavbar';
import BottomNavbar from '../../components/bottomnavbar/BottomNavBar';
import PlayerList from '../../components/playerlist/PlayerList';

const Statistics: React.FC = () => {
    return (
        <div>
            <TopNavbar props='Statistics' />
            <PlayerList />
            <BottomNavbar/>
        </div >
    );
};

export default Statistics;
