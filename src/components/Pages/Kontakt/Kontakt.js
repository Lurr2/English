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
            <iframe title='lokalizacja' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.674171014487!2d22.627482772614478!3d51.21647949592592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722568907ae570f%3A0x83864800c135417d!2sGenera%C5%82a%20Stanis%C5%82awa%20Skalskiego%2C%2020-325%20Lublin!5e1!3m2!1spl!2spl!4v1659261069375!5m2!1spl!2spl" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <Footer />
        </section>
    );
};


export default Kontakt;