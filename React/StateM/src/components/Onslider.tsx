import React, { useState, useEffect } from 'react';
import Viewer from './Viewer';
import Thumbs from './Thumbs';
import { articleData } from './articles';



  
const OnSlider: React.FC = () => {
    const catalogue = articleData.map((article) => ({
        id: article.propertyId,
        title: article.cardTitle,
        image: article.cardImg,
        description: article.cardDescription,
      }));
    const previousIcon = 'https://cdn-icons-png.flaticon.com/512/271/271220.png'; // Left arrow icon
    const nextIcon = 'https://cdn-icons-png.flaticon.com/512/271/271228.png'; // Right arrow icon
    
    
      
    
  const [title, setTitle] = useState('Catalog Viewer');
  const catalogs = [...catalogue]; // Replace with actual catalogs data
  const [currentIndex, setCurrentIndex] = useState(0);
  const [catalogSelected, setCatalogSelected] = useState(catalogs[0]);
  const [slideActive, setSlideActive] = useState(false);
  const slideDuration = 3000;

  useEffect(() => {
    let slideTimer = null;

    if (slideActive) {
      slideTimer = setInterval(() => {
        const newIndex = (currentIndex + 1) % catalogs.length;
        setCurrentIndex(newIndex);
        setCatalogSelected(catalogs[newIndex]);
      }, slideDuration);
    }

    return () => {
      if (slideTimer) {
        clearInterval(slideTimer);
      }
    };
  }, [slideActive, currentIndex, catalogs]);

  const selectedCatalog = (index: number) => {
    setCurrentIndex(index);
    setCatalogSelected(catalogs[index]);
  };

  const previousClick = () => {
    const newIndex = (currentIndex - 1 + catalogs.length) % catalogs.length;
    setCurrentIndex(newIndex);
    setCatalogSelected(catalogs[newIndex]);
  };

  const nextClick = () => {
    const newIndex = (currentIndex + 1) % catalogs.length;
    setCurrentIndex(newIndex);
    setCatalogSelected(catalogs[newIndex]);
  };

  const slideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSlideActive(event.target.checked);
  };

  return (
    <div>
      <div className="title" data-testid="app-title">
        {title}
      </div>
      <div className="catalog-outer">
        <div className="catalog-view">
          <div className="text-center">
            <div className="view-outter text-center">
              <Viewer catalog={catalogSelected.image} />
            </div>
          </div>
        </div>
        <div className="catalog-items">
          <div className="previous" onClick={previousClick} data-testid="prev-icon">
            <img src={previousIcon} alt="Previous" width={10}/>
          </div>
          <div className="next" onClick={nextClick} data-testid="next-icon">
            <img src={nextIcon} alt="Next" width={10}/>
          </div>
          <Thumbs
            items={catalogs}
            currentIndex={currentIndex}
            selectedCatalog={selectedCatalog}
          />
        </div>
        <div className="slide-input">
          <input
            type="checkbox"
            onChange={slideChange}
            className="test"
            data-testid="slide"
          />{' '}
          Slide
        </div>
      </div>
    </div>
  );
};

export default OnSlider;
