import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import data from '../../../data.json';
import UpSpace from '../../Header/UpSpace';

import classes from './Opinie.module.scss';
import OpinieCard from '../../common/OpinieCard/OpinieCard';

const Opinie = () => {
    return (
        <div>
        <UpSpace />
            <Header />
            {data.opinie.map(dataItem => (
                <OpinieCard className={classes.TextBox}
                    key={dataItem.id}
                    title={dataItem.title}
                    text={dataItem.text}
                />

            ))}
            <Footer />
        </div>
        
    );
};

export default Opinie;