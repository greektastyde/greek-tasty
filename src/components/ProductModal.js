import { useState } from "react";
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

export default function ProductModal({ 
  buttonText = "Artikel anzeigen", 
  buttonClassName = "bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 rounded-lg transition-colors",
  closeButtonText = "Schließen",
  images = []
}) {
  const [showModal, setShowModal] = useState(false);


  const arrowStyles = {
    position: 'absolute',
    zIndex: 10,
    top: '50%',
    transform: 'translateY(-50%)',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    padding: 0,
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: '275px',
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: '275px',
  };

  if (showModal) {
    return (
      <div className="fixed bg-black/80 inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg relative w-11/12 md:w-1/2 lg:w-1/3 max-h-[90vh] overflow-y-auto">
          
          <div className="mb-4">
            {/* Add custom CSS for hiding arrows on mobile */}
            <style jsx global>{`
              @media (max-width: 768px) {
                .carousel-arrow {
                  display: none !important;
                }
              }
              
              /* Remove focus outline */
              .carousel-arrow:focus {
                outline: none;
              }
              
              /* Position the carousel container to allow arrows to extend outside */
              .carousel-root {
                position: relative;
              }
              
              /* Make sure the carousel slider doesn't hide the arrows */
              .carousel .slider-wrapper {
                overflow: visible !important;
              }
            `}</style>
            
            {images.length > 0 && (
              <div className="relative">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  emulateTouch={true}
                  swipeable={true}
                  renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                      <button 
                        type="button" 
                        onClick={onClickHandler} 
                        style={rightArrowStyles}
                        aria-label="Previous slide"
                        className="carousel-arrow"
                      >
                        <IoArrowBackCircle size={36} className="text-primary" />
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                      <button 
                        type="button" 
                        onClick={onClickHandler} 
                        style={leftArrowStyles}
                        aria-label="Next slide"
                        className="carousel-arrow"
                      >
                        <IoArrowForwardCircle size={36} className="text-primary" />
                      </button>
                    )
                  }
                >
                  {images.map((image, index) => (
                    <div key={index} className="p-2">
                      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
                        <Image 
                          src={image.src} 
                          fill 
                          style={{objectFit: 'contain'}} 
                          alt={image.alt || title} 
                        />
                      </div>
                      <p className="text-xl font-semibold text-center mb-8 mt-2">{image.caption}</p>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
          
          <div className="flex justify-center">
            <button 
              type="button" 
              onClick={() => setShowModal(false)}
              className="bg-gray-200 hover:bg-gray-300 max-w-[200px] w-full text-center text-gray-800 font-semibold py-2 rounded-lg transition-colors"
            >
              {closeButtonText}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowModal(true)}
      className={buttonClassName}
    >
      {buttonText}
    </button>
  );
}
