import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import IndywidualneOferty from './IndywidualneOferty/IndywidualneOfertyCard';


const Oferta = () => {
    return (
        <section>
            <Header />
                <IndywidualneOferty/>
            <Footer />
        </section>
    );
}



export default Oferta;