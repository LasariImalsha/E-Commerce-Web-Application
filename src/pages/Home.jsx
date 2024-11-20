import React, { useState } from "react";
import Products from "../components/Products";
import SliderImageOne from "../assets/sliderImages/SliderImage1.jpg";
import SliderImageTwo from "../assets/sliderImages/SliderImage2.jpg";
import SliderImageThree from "../assets/sliderImages/SliderImage3.jpg";

const slides = [
    {
        image: SliderImageOne,
        text: "Welcome to Modish",
    },
    {
        image:SliderImageTwo,
        text: "Gear up , look sharp",
    },
    {
        image: SliderImageThree,
        text: "Exclusive Deals Available",
    },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
            <div className="relative overflow-hidden">
                {/* Slide */}
                <div
                    className="w-full h-[500px] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${slides[currentIndex].image})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        {slides[currentIndex].text}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-EcomBrown text-white p-2 rounded-full hover:EcomBrown/5"
                >
                    &#60;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-EcomBrown text-white p-2 rounded-full hover:EcomBrown/5"
                >
                    &#62;
                </button>

                {/* Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-EcomLightGray"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>

            <Products/>
        </div>


    );
};

export default Home;
