import React from 'react';
import classes from './ButtonForm.module.scss';

const ButtonForm = ({ buttonText }) => {
    return (
        <div>
            <button className={classes.btn}>{buttonText}</button>
        </div>
    );
};

export default ButtonForm;