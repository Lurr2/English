import React from 'react';
import { Link } from 'react-router-dom';
import classes from './UpSpace.module.scss';
import PhoneHeader from '../../img/na_telefony.png';
import ButtonFormPhone from '../common/ButtonForm/ButtonFormPhone';

const UpSpace = () => {
    return (
        <section>
            <div className={classes.container}>
            </div>
            <div className={classes.PhoneContainer}>
                <img alt='header' src={PhoneHeader} className={classes.PhoneImage} />
                
            
            <Link to="/kontakt">
                    <ButtonFormPhone buttonText={`Zapisz się`} />
                </Link>
            </div>
        </section>
    );
};

export default UpSpace;