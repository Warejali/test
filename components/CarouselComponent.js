import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../public/banner/Banner-01.jpg';
import banner2 from '../public/banner/Banner-02.jpg';
import banner3 from '../public/banner/Banner-03.jpg';

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 3);
  };

  return (
    <div className="relative">
     
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={1000}
        showIndicators={false}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={false}
        stopOnHover={false}
        swipeScrollTolerance={5}
        thumbWidth={100}
      >
        <div className="relative h-100">
          <Image
            className="w-full h-full object-cover"
            src={banner1}
            alt="First slide"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex justify-center items-center"></div>
        </div>
        <div className="relative h-100">
          <Image
            className="w-full h-full object-cover"
            src={banner2}
            alt="First slide"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex justify-center items-center"></div>
        </div>
        <div className="relative h-100">
          <Image
            className="w-full h-full object-cover"
            src={banner3}
            alt="First slide"
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute inset-0 flex justify-center items-center"></div>
        </div>
      </Carousel>
      <div className="absolute inset-0 flex items-center justify-between">
        <button
          className="text-primary px-4 py-2 rounded-l-lg"
          onClick={handlePrevClick}
        >
          ❮
        </button>
        <button
          className="text-primary px-4 py-2 rounded-r-lg"
          onClick={handleNextClick}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
