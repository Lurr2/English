import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import RegulaminText from './RegulaminText/RegulaminText';
import classes from './Regulamin.module.scss'
const Regulamin = () => {
    return (
        <div>
        <Header />
        <h2 className={classes.heading}>Regulamin dotyczący zajęć </h2>
                <RegulaminText/>
        <Footer/>
        </div>
    );
};

export default Regulamin;