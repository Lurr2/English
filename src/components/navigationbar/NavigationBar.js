import React from 'react';
import classes from './navigationBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <section className={classes.container}>
        <div className={classes.logo}>znacbiegleangielski</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/' className={navData => navData.isActive ? classes.active : ''}>
                            Dlaczego my?
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
                        <NavLink to='/zapisz_sie' className={navData => navData.isActive ? classes.active : ''}>
                            Zapisz się
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/kontakt' className={navData => navData.isActive ? classes.active : ''}>
                            Kontakt
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