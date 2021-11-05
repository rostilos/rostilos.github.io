import React, { useState } from "react";
import Slider from "react-slick";
import SliderImage1 from '../images/main-slider/1785.png';
import SliderImage2 from '../images/main-slider/image-2.png';



class MainSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows : true
        };

        const slides = [
            {
                id : 1,
                photo: SliderImage1,
                title: "loft мебель",
                subTitle: "Современная и удобная мебель в Анапе",
            },
            {
                id : 2,
                photo: SliderImage1,
                title: "loft мебель",
                subTitle: "Современная и удобная мебель в Анапе",
            },

        ];

        let styleName = this.props.className ? this.props.className : '';


        return (
            <Slider {...settings} className={styleName + ' main-slider'}>
                {slides.map( (e) =>
                    <div key={e.id} className="main-slider__slide">
                        <div className="main-slider__image _ibg">
                            <img src={e.photo} alt="" />
                        </div>
                        <div className="main-slider__content">
                            <h2 className="main-slider__title">{e.title}</h2>
                            <h3 className="main-slider__sub-title">{e.subTitle}</h3>
                            <button className="main-slider__button">СМОТРЕТЬ КАТАЛОГ</button>
                        </div>
                    </div>
                )}  
            </Slider>
        );
    }
}

export default MainSlider;