import foto1 from '../assets/images/imagengrande1Banner.png';
import foto2 from '../assets/images/imagengrande2Banner.png';
import { useState, useEffect } from 'react';
import foto1Sm from '../assets/images/imagen1Banner.png';
import foto2Sm from '../assets/images/imagen2Banner.png';


const CarruselPrincipal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 2; // Assuming 2 images
      setCurrentIndex(nextIndex);
    }, 3000); // Adjust interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup function
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % 2;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + 2) % 2; // Adjust for negative index
    setCurrentIndex(previousIndex);
  };

  return (
    <>
      <section className='flex w-full md:h-60 lg:h-96 xl:w-full 2xl:w-full 2xl:mb-36 2xl:h-[500px]'>
        <div id="carouselExampleControlsNoTouching relative" className="carousel slide" data-bs-touch="true">
          <div className="carousel-inner">
            <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
              <img src={foto1} className="hidden w-[768px] sm:flex h-52 md:h-80 md:w-[1024px] lg:h-[400px] lg:w-full xl:w-[1440px] 2xl:w-[1850px] 2xl:h-[500px]" alt="banner" />
              <img src={foto1Sm} className="flex  w-[650px] sm:hidden" alt="banner" />
            </div>
            <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
              <img src={foto2} className="hidden w-[768px] sm:flex h-52 md:h-80 md:w-[1024px] lg:h-[400px] lg:w-full xl:w-[1440px] 2xl:w-[1850px] 2xl:h-[500px]" alt="..." />
              <img src={foto2Sm} className="flex w-[650px] sm:hidden" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev" onClick={handlePrevious}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next" onClick={handleNext}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default CarruselPrincipal;



/*
import { useState } from 'react';
import foto1 from '../assets/images/bannerPrincipal1.png';
import foto2 from '../assets/images/fotoCarrusel2.png';

const CarruselPrincipal = () => {

    const imagenes = [
        {
            id: 1,
            src: foto1,
            alt: 'foto1',
        },
        {
            id: 2,
            src: foto2,
            alt: 'foto2',
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [triggerRender, setTriggerRender] = useState(false);

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % imagenes.length);
        setTriggerRender(prevTriggerRender => !prevTriggerRender);
    };

    const handlePrevious = () => {
        setCurrentIndex((currentIndex - 1 + imagenes.length) % imagenes.length);
        setTriggerRender(prevTriggerRender => !prevTriggerRender);
    };

    return (
        <>
            <section className='contenedorBannerPrincipal'>
            <div className="carousel-item active">
                <img
                    className='contenedorBannerPrincipal_imagen'
                    key={imagenes[currentIndex].id}
                    src={imagenes[currentIndex].src}
                    alt={imagenes[currentIndex].alt}
                />
                </div>
                <button className="carousel-button next" onClick={handleNext}>
                    {`>`}
                </button>
                <button className="carousel-button previous" onClick={handlePrevious}>
                    {`<`}
                </button>
            </section>
        </>
    )
}

export default CarruselPrincipal
*/


/*
import foto1 from '../assets/images/bannerPrincipal1.png';
import foto2 from '../assets/images/fotoCarrusel2.png';

const CarruselPrincipal = () => {


    return (
        <>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto1} className="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={foto2} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default CarruselPrincipal
*/


/*
import foto1 from '../assets/images/bannerPrincipal1.png';
import foto2 from '../assets/images/fotoCarrusel2.png';
import { useState, useEffect } from 'react';

const CarruselPrincipal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % 2; // Assuming 2 images
      setCurrentIndex(nextIndex);
    }, 3000); // Adjust interval as needed (in milliseconds)

    return () => clearInterval(intervalId); // Cleanup function
  }, [currentIndex]);

  return (
    <>
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
        <div className="carousel-inner">
          <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
            <img src={foto1} className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
            <img src={foto2} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarruselPrincipal;
*/
