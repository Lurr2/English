import React from 'react';
import data from '../../../../data.json';
import classes from './RegulaminText.module.scss';

const RegulaminText = () => {
   return (
    
    <section className={classes.container}>
            
            <ol>
            {data.regulamin.map(ragu => {
                return (
                <li className={classes.text} id={ragu.id}>{ragu.text}</li>
                );
            })}
            
            </ol>
            <ul>
            {data.regulamin.map(ragu => {
                return (
                <li className={classes.text} id={ragu.id}>{ragu.text}</li>
                );
            })}
            
            </ul>
        </section>
   );
};

export default RegulaminText;