import React from 'react';
import StickyButton from './../Stickybutton/StickyButton';
import Headers from './../Headers/Headers';
import TopBanner from './../TopBanner/TopBanner';
import SecondPart from './../SecondPart/SecondPart';
import ThirdPart from './../ThirdPart/ThirdPart';
import FourthPart from './../FourthPart/FourthPart';
import Review from './../Review/Review';
import Package from '../Package/Package';
import TrekMap from './../TrekMap/TrekMap';
import TrekPolicies from './../TrekPolicies/TrekPolicies';
import Faqs from './../Faqs/Faqs';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <StickyButton/>
            <Headers/>
            <TopBanner/>
            <SecondPart/>
            <ThirdPart/>
            <FourthPart/>
            <Review/>
            <Package/>
            <TrekMap/>
            <TrekPolicies/>
            <Faqs/>
            <Footer/>
        </div>
    );
};

export default Home;