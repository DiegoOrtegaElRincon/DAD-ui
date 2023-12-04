// App.tsx

import React from 'react';
import TopNavbar from '../../components/topnavbar/TopNavbar';
import BottomNavbar from '../../components/bottomnavbar/BottomNavBar';
import NewsList from '../../components/newslist/NewsList';

const News: React.FC = () => {
    return (
        <div>
            <TopNavbar props='Statistics' />
            <NewsList/>
            <BottomNavbar/>
        </div >
    );
};

export default News;
