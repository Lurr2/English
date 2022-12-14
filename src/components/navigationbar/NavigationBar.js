import React from 'react';
import classes from './navigationBar.module.scss';
import logo from '../../img/logo2.png';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <section className={classes.container}>
        <div className={classes.logo}><p className={classes.TitleAndLogo}><img className={classes.logoImage} src={logo} alt='logo'/><span className={classes.displaing}>znacbiegleangielski</span></p></div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/' className={navData => navData.isActive ? classes.active : ''}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/oferta' className={navData => navData.isActive ? classes.active : ''}>
                            Oferta
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/opinie' className={navData => navData.isActive ? classes.active : ''}>
                            Opinie
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/cennik' className={navData => navData.isActive ? classes.active : ''}>
                            Cennik
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to='/kontakt' className={navData => navData.isActive ? classes.active : ''}>
                            Kontakt
                        </NavLink>
                    </li>
                    
                </ul>

               

            </nav>

        </section>
    );
};

export default NavigationBar;