import React from 'react';
import { Link } from 'react-router-dom';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
                <Link to="/kontakt">
                <ButtonForm buttonText={`Przejdź do formularza`} />
                </Link>
            </header>
    );
};

export default Header;