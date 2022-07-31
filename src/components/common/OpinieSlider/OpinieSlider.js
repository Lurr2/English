import React from 'react';
import classes from './OpinieSlider.module.scss';

import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

import data from '../../../data.json';
import ButtonCommon from '../ButtonCommon/ButtonCommon';

const OpinieSlider = ({ slides }) => {
    const [ActiveSlide, SetActiveSlide] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        SetActiveSlide(ActiveSlide === length - 1 ? 0 : ActiveSlide + 1)
    };

    const prevSlide = () => {
        SetActiveSlide(ActiveSlide === 0 ? length - 1 : ActiveSlide - 1);
    };

    const changeSlide = (i) => {
        SetActiveSlide(ActiveSlide => ActiveSlide = i)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const dots = [];

    for (let i = 0; i < data.opnieSlider.length; i++) {
        dots.push(
            <div className={i === ActiveSlide ? classes.red : null} onClick={() => changeSlide(i)}>
                <Link to="#" className={classes.dots}>
                    test
                </Link>
            </div>
        )
    }

    return (

        <section className={classes.container}>
            <div className={classes.heading}><p>Opinie</p></div>
            <div className={classes.containerSlider}>

                {data.opnieSlider.slice(ActiveSlide, ActiveSlide + 1).map((slides, index) => {
                    return (
                        <div className={classes.TextBox} key={slides.id}>
                            <h2 className={classes.Name}>{slides.title}</h2>
                            <p className={classes.Rating}>{slides.rating}<AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                            <p className={classes.description}>{slides.text}</p>
                            <Link to="/opinie">
                                <ButtonCommon buttonText={`Zobacz wszystkie opinie`} /></Link>
                        </div>
                    );
                })}



                <div className={classes.dots}><FaArrowAltCircleLeft
                    className={classes.left_arrow}
                    onClick={prevSlide}
                />{dots}<FaArrowAltCircleRight
                        className={classes.right_arrow}
                        onClick={nextSlide}
                    />
                </div></div>
        </section>
    );
};

export default OpinieSlider;