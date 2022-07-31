import React from 'react';
import classes from './ButtonCommon.module.scss';

const ButtonCommon = ({ buttonText }) => {
    return (
        <div>
            <button className={classes.btn}>{buttonText}</button>
        </div>
    );
};

export default ButtonCommon;