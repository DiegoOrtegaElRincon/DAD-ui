// YourMatches.tsx

import React from 'react';
import TopNavbar from '../../components/topnavbar/TopNavbar';
import BottomNavbar from '../../components/bottomnavbar/BottomNavBar';
import EventCalendar from '../../components/calendar/EventCalendar';

const YourMatches: React.FC = () => {
    return (
        <div>
            <TopNavbar props='Your Matches' />
            <EventCalendar/>
            <BottomNavbar/>
        </div >
    );
};

export default YourMatches;
