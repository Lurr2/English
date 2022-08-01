import React, { useState } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import data from '../../../data.json';
import classes from './Oferta.module.scss';

const Oferta = () => {
    return (
        <section>
            <Header />
            <div className={classes.container}>
                <p>Nasze oferty</p>
                <div className={classes.picture_box}>
                    <IndywidualneOferty />
                </div>
            </div>
            <Footer />
        </section>
    );
}

const IndywidualneOferty = () => {
    const [CardIndividualToShow, SetCardIndividualToShow] = useState("");
    const [IndividualPopupDisplay, SetIndividualPopupDisplay] = useState(false);


    const CardIndividual = data.oferty_indywidualne.map((indi) => (
        <div className={classes.pictures_card} onClick={() => showIndiCard(indi)}>
            <h2 className={classes.Title}>{indi.title}</h2>
            <p className={classes.price}>{indi.price}</p>
            <p className={classes.description}>{indi.description}</p>
            <p className={classes.click}>{indi.click}</p>
        </div>
    ));

    const showIndiCard = (indi) => {
        SetCardIndividualToShow(indi);
        SetIndividualPopupDisplay(true);
    };

    const hidePopUp = () => {
        SetIndividualPopupDisplay(false);
    };

    return (
        <section>
            <div>{CardIndividual}</div>

            {
                IndividualPopupDisplay ?
                    <div className={classes.lightbox_view} onClick={hidePopUp}>
                        <div className={classes.lightbox_img}>
                            <h2 >{CardIndividualToShow.title}</h2>
                            <p >{CardIndividualToShow.price}</p>
                            <p >{CardIndividualToShow.description}</p>
                            <p >{CardIndividualToShow.click}</p>
                        </div>


                    </div>
                    : ""
            }
        </section>
    );
}

export default Oferta;