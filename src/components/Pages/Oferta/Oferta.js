import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import IndywidualneOfertyCard from './IndywidualneOferty/IndywidualneOfertyCard';


const Oferta = () => {
    return (
        <section>
            <Header />
                <IndywidualneOfertyCard/>
            <Footer />
        </section>
    );
}



export default Oferta;