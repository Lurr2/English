import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import IndywidualneOfertyCard from './IndywidualneOferty/IndywidualneOfertyCard';
import classes from './Oferta.module.scss';

const Oferta = () => {
    return (
        <section>
            <Header />
            <p>NaszeOferty</p>
            <div className={classes.gownoFlex}>
                <IndywidualneOfertyCard/>
            </div>
            <Footer />
        </section>
    );
}



export default Oferta;