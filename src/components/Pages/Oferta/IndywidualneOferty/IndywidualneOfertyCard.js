import classes from './IndywidualneOfertyCard.module.scss'
import data from '../../../../data.json';
import { Fragment, useState } from 'react';


const IndywidualneOferty = () => {
    const [CardIndividualToShow, SetCardIndividualToShow] = useState("");
    const [IndividualPopupDisplay, SetIndividualPopupDisplay] = useState(false);


    const CardIndividual = data.oferty_indywidualne.map((indi) => (

        <div className={classes.pictures_card} onClick={() => showIndiCard(indi)}>
            <h2 className={classes.Title}>{indi.title}</h2>
            <p className={classes.price}>{indi.price}</p>
            <p className={classes.description}>{indi.description}...</p>
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
        <Fragment>
            <div className={classes.heading}>
                <p className={classes.heading_1}>Nasze Oferty</p>
                <p className={classes.heading_2}>Opcje Indywidualne</p>
            </div>
            <section className={classes.container}>

                {CardIndividual}
                {
                    IndividualPopupDisplay ?
                        <div className={classes.lightbox_view} onClick={hidePopUp}>
                            <div className={classes.lightbox_img}>
                                <h2 className={classes.titlePop}>{CardIndividualToShow.title}</h2>
                                <p className={classes.pricePop}>{CardIndividualToShow.price}</p>
                                <p className={classes.descriptionPop}>{CardIndividualToShow.moreDescription}</p>
                                <p className={classes.eks}>X</p>
                            </div>


                        </div>
                        : ""
                }
            </section>
        </Fragment>
    );
}


export default IndywidualneOferty;