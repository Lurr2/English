import React from 'react';
import classes from './ButtonFormPhone.module.scss';

const ButtonFormPhone = ({buttonText}) => {
    return (
        <div>
            <button className={classes.btn}>{buttonText}</button>
        </div>
    )
};

export default ButtonFormPhone;