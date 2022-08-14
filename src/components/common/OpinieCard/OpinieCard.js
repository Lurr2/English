import React from 'react';
import classes from './OpinieCard.module.scss';
import {AiFillStar} from 'react-icons/ai';

const OpinieCard = ({ title, text}) => {
    return (
        <section className={classes.container}>
            <div className={classes.TextBox}>
                <h2 className={classes.Name}>{title}</h2>
                <p className={classes.star}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                <p className={classes.description}>{text}</p>
            </div>
        </section>
    );
};

export default OpinieCard;