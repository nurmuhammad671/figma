import React from "react";
import Slider from "react-slick";
import kia from "../../assets/images/kia.svg";
import toyota from "../../assets/images/toyota.svg";

const SliderCard = () => {
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="">
            <Slider {...settings}>
                <div>
                    <img src={kia} alt="" />
                </div>
                <div>
                    <img src={toyota} alt="" />
                </div>
                <div>
                    <img src={kia} alt="" />
                </div>
                <div>
                    <img src={toyota} alt="" />
                </div>
                <div>
                    <img src={kia} alt="" />
                </div>
                <div>
                    <img src={toyota} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderCard;