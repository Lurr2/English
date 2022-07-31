import React from 'react';
import classes from './OpinieSlider.module.scss';

import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import data from '../../../data.json';

const OpinieSlider = ({ slides }) => {
    const [ActiveSlide, SetActiveSlide] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        SetActiveSlide(ActiveSlide === length - 1 ? 0 : ActiveSlide + 1)
    };

    const prevSlide = () => {
        SetActiveSlide(ActiveSlide === length - 1 ? 0 : ActiveSlide - 1)
    };

    const changeSlide = (i) => {
        SetActiveSlide(ActiveSlide => ActiveSlide = i)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const dots = [];

    for (let i = 0; <data.opnieSlider.length; i++) {
        dots.push(
            <div className={i === ActiveImage ? classes.red : null} onClick={() => changeSlide(i)}>
                <Link to="#" className={classes.dots}>
                    test
                </Link>
            </div>
        )
    }

    return (

        <section className={classes.container}>
            <div className={classes.heading}>
                <h1>Best choices</h1>
            </div>
            <div className={classes.containerSlider}>
                <FaArrowAltCircleLeft
                    className={classes.left_arrow}
                    onClick={prevSlide}
                />
                {data.slider.slice(ActiveImage, ActiveImage + 1).map((slide, index) => { 
                    return (
                      <div key={index}>
                        <img src={slide.image} alt="some" className={classes.image} />
                      </div>
                    );
                  })}
                  <FaArrowAltCircleRight
        className={classes.right_arrow}
        onClick={nextSlide}
      />
        </div>
        
        
        <div className={classes.dots}>{dots}</div>
        </section>
        );
};

export default OpinieSlider;