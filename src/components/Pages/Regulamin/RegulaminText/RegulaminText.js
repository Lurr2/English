import React from 'react';
import data from '../../../../data.json';
import classes from './RegulaminText.module.scss';

const RegulaminText = ({ text }) => {
   return (
    
    <section className={classes.container}>
            
            <ol >
            {data.regulamin.map(ragu => {
                return (
                <li className={classes.text} id={ragu.id}>{ragu.text}</li>
                );
            })}
            
            </ol>
        </section>
   );
};

export default RegulaminText;