import React from 'react';
import { Link } from 'react-router-dom';
import ButtonForm from '../common/ButtonForm/ButtonForm';
import classes from './Header.module.scss';
import logo from '../../img/logo2.png';

const Header = () => {
    return (
        <header className={classes.header}>
                <div className={classes.header_text_box}>
                    <h1 className={classes.heading_primary}>
                        <span className={classes.heading_primary_main}>Znaj biegle angielski</span>
                    </h1>
                    <p className={classes.par1}> Mów biegle.  
                    </p>
                    <p className={classes.par2}> Bez stresu.
                    </p>
                    <p className={classes.par3}> Z pewnością siebie.
                    </p>
                    <p className={classes.par4}>Zdaj egzamin na 100%</p>
                </div>
                <div className={classes.logo}><img className={classes.logoImage} src={logo} alt='logo'/></div>
                <Link to="/kontakt">
                <ButtonForm buttonText={`Przejdź do formularza`} />
                </Link>
            </header>
    );
};

export default Header;