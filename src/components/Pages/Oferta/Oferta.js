import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import IndywidualneOferty from './IndywidualneOferty/IndywidualneOfertyCard';
import GrupoweOferty from './GrupoweOferty/GrupoweOferty';


const Oferta = () => {
    return (
        <section>
            <Header />
                <IndywidualneOferty/>
                <GrupoweOferty />
            <Footer />
        </section>
    );
}



export default Oferta;