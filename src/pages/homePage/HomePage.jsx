import React from 'react';
import Banner from '../../components/home/Banner';
import Summary from '../../components/home/Summary';
import Friends from '../friends/Friends';

const HomePage = () => {
    return (
        <main className='bg-[#F8FAFC]'>
            <Banner></Banner>
            <Summary></Summary>
            <Friends></Friends>
        </main>
    );
};

export default HomePage;