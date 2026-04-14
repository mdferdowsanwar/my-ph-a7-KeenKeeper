import React from 'react';
import Banner from '../../components/home/Banner';
import Summary from '../../components/home/Summary';

const HomePage = () => {
    return (
        <main className='bg-[#F8FAFC]'>
            <Banner></Banner>
            <Summary></Summary>
        </main>
    );
};

export default HomePage;