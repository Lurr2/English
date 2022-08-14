import React from 'react';
import data from '../../../data.json';

import Header from '../../Header/Header';
import AboutUs from '../../About Us/AboutUs';
import Footer from '../../Footer/Footer';
import OpinieSlider from '../../common/OpinieSlider/OpinieSlider';
import UpSpace from '../../Header/UpSpace';

const DlaczegoMy = () => {
    return (
        <div>
        <UpSpace />
        <Header />
        <AboutUs />
        <OpinieSlider slides={data.opnieSlider}/>
        <Footer />
        </div>
    );
};

export default DlaczegoMy;