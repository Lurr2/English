import React from 'react';
import classes from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
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
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
            <p>Zapoznaj się z naszym <NavLink className={classes.Regulamin} to='/regulamin'>
            Regulaminem
            </NavLink></p>
            </div>

        </section>
    );
};

export default Footer;