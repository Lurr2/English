import React from 'react';
import { Link } from 'react-router-dom';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>
                <div className={classes.header_text_box}>
                    <h1 className={classes.heading_primary}>
                        <span className={classes.heading_primary_main}>Znaj biegle angielski</span>
                    </h1>
                    <p className={classes.par}> Mów biegle. Bez stresu. Z pewnością siebie.
                    </p>
                    <p className={classes.par}>Zdaj egzamin na 100%</p>
                </div>
                <Link to="/kontakt">
                <ButtonForm buttonText={`Przejdź do formularza`} />
                </Link>
            </header>
    );
};

export default Header;