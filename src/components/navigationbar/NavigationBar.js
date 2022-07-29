import React from 'react';
import classes from './navigationBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <section className={classes.container}>
            <div className={classes.title}>
                <h1>Język Angielski</h1>
                <h4 className={classes.h4text}>Z nami szybko poznasz jego tajniki</h4>
            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/' className={navData => navData.isActive ? classes.active : ''}>
                            O nas
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/oferta' className={navData => navData.isActive ? classes.active : ''}>
                            Oferta
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
                    <li>
                        <NavLink to='/zapisz_sie' className={navData => navData.isActive ? classes.active : ''}>
                            Zapisz się
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/regulamin' className={navData => navData.isActive ? classes.active : ''}>
                            Regulamin
                        </NavLink>
                    </li>
                </ul>

               

            </nav>

        </section>
    );
};

export default NavigationBar;