import React from 'react';
import './CarouselBanner.style.scss';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import desktopBg from '../../assets/img/desktop-slide-1.jpg';
import laptopBg from '../../assets/img/laptop-slide-1.jpg';
import phoneBg from '../../assets/img/phone-slide.jpg';
import { Link } from 'react-router-dom';

class CarouselBanner extends React.Component {
    
    
    render() {
        const carousels = [
            {title: "laptops...", description: "Portable & Cheap! Up to 35% off ", button: "Shop Now", index: 1, src: laptopBg},
            {title: "Desktop", description: "Portable & Cheap! Up to 25% off ", button: "Shop Now", index: 2, src: desktopBg},
            {title: "Phones", description: "Portable & Cheap! Up to 15% off ", button: "Shop Now", index: 3, src: phoneBg},
        ]
        return(
            <div className="carousel-banner">
                <Slider autoplay={3000}>
                    {carousels.map((item, index) => (
                        <div className="carousel-banner__img-slide"  key={index}
                            style={{backgroundImage: `linear-gradient(rgba(86, 128, 233, 0.8), rgba(19, 9, 37, 0.6)), url(${item.src})`}}
                        >
                            <div className="carousel-banner__content">
                                <h1 className="carousel-banner__heading">{item.title}</h1>
                                <p className="carousel-banner__slogan">{item.description}</p>
                                <Link to={`/shop/${item.title.toLowerCase()}`} className="carousel-banner__btn">{item.button}</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* linear-gradient(rgba(86, 128, 233, 0.4), rgba(19, 9, 37, 0.5)),  */}
            </div>            
        )
    }
};



export default CarouselBanner;

