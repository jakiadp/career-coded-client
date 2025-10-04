import React from 'react';
import Bannar from '../Component/Bannar';
import HotJob from '../Component/HotJob';

const Home = () => {

    
const jobspromise = fetch('http://localhost:3000/jobs').then(res => res.json())

    return (
        <div>
            <Bannar></Bannar>
            <HotJob jobspromise={jobspromise}></HotJob>
        </div>
    );
};

export default Home;