import React,{useState} from 'react'
import '../AdBanner/adbanner.css'
const images = [
    'image1.jpg', // Replace with actual image paths
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
  ];
function AdBanner(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="carousel">
        <div className="carousel-inner">
          <img src={images[currentIndex]} alt="Banner" className="carousel-image" />
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${currentIndex === idx ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    );
}
export default AdBanner;