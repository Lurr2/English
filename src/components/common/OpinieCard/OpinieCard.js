import React from 'react';
import classes from './OpinieCard.module.scss';


const OpinieCard = ({ title, text}) => {
    return (
        <section className={classes.container}>
            <div className={classes.TextBox}>
                <h2 className={classes.Name}>{title}</h2>
                <p className={classes.description}>{text}</p>
            </div>
        </section>
    );
};

export default OpinieCard;