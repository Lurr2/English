import React from 'react';


import classes from './Kontakt.module.scss';

import Footer from '../../Footer/Footer';
import ContactForm from '../../Formularz/ContactForm';
import Header from '../../Header/Header';

const Kontakt = () => {
    return (
        <section>
            <Header />
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.spaceMargin}>
                        <p className={classes.signUpText}>Generała Stanisława Skalskiego, Lublin, Polska</p>
                        <p className={classes.signUpText}>+48-985-245-1730</p>
                        <p className={classes.signUpText}>znacbiegleangielski@gmail.com</p>
                    </div>
                </div>
                <div className={classes.content2}>
                    <div className={classes.spaceMargin}>
                        <p><ContactForm/></p>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};


export default Kontakt;