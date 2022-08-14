import React from 'react';
import classes from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import { BiCopyright } from 'react-icons/bi';
const Footer = () => {
    return (
        <section className={classes.container}>
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
            <div className={classes.description_text}>
            <p><BiCopyright/> Wszelkie prawa zastrzeżone - Znać biegle angielski</p>
            <p>Zapoznaj się z naszym <NavLink className={classes.Regulamin} to='/regulamin'>
            Regulaminem
            </NavLink></p>
            </div>

        </section>
    );
};

export default Footer;