import React from 'react';
import classes from './OpinieCard.module.scss';
import { AiFillStar } from "react-icons/ai";

const OpinieCard = ({ title, rating, text}) => {
    return (
        <section className={classes.container}>
            <div className={classes.TextBox}>
                <h2 className={classes.Name}>{title}</h2>
                <p className={classes.Rating}>{rating}<AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                <p className={classes.description}>{text}</p>
            </div>
        </section>
    );
};

export default OpinieCard;