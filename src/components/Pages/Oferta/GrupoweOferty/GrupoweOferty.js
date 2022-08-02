import { Fragment, useState } from 'react';
import data from '../../../../data.json';
import classes from './GrupoweOferty.module.scss';

const GrupoweOferty = () => {
    const [CardGroupToShow, SetCardGroupToShow] = useState("");
    const [GroupPopupDisplay, SetGroupPopupDisplay] = useState(false);


    const CardGroup = data.oferty_grupowe.map((grou) => (
        <div className={classes.pictures_card} onClick={() => showGrouCard(grou)}>
        <h2 className={classes.Title}>{grou.title}</h2>
        <p className={classes.price}>{grou.price}</p>
        <p className={classes.description}>{grou.description}...</p>
        <p className={classes.click}>{grou.click}</p>
    </div>
    ));

    const showGrouCard = (grou) => {
        SetCardGroupToShow(grou);
        SetGroupPopupDisplay(true);
    };
    const hidePopUp = () => {
        SetGroupPopupDisplay(false);
    };

    return (
        <Fragment>
            <div className={classes.heading}>
                <p className={classes.heading_2}>Opcje Grupowe</p>
            </div>
            <section className={classes.container}>

                {CardGroup}
                {
                    GroupPopupDisplay ?
                        <div className={classes.lightbox_view} onClick={hidePopUp}>
                            <div className={classes.lightbox_img}>
                                <h2 className={classes.titlePop}>{CardGroupToShow.title}</h2>
                                <p className={classes.pricePop}>{CardGroupToShow.price}</p>
                                <p className={classes.descriptionPop}>{CardGroupToShow.moreDescription}</p>
                                <p className={classes.eks}>X</p>
                            </div>


                        </div>
                        : ""
                }
            </section>
        </Fragment>
    );

};

export default GrupoweOferty;