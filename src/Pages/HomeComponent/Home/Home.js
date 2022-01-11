import React from 'react';
import AllStudent from '../AllStudent/AllStudent';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <AllStudent></AllStudent>
        </div>
    );
};

export default Home;