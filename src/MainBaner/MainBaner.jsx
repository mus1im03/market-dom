import React, { useRef } from 'react';
import './MainBaner.css'
import slide1 from '../assets/img/venecshtukaturka.png'
import slide2 from '../assets/img/energyinstruments.png'

const MainBaner = () => {

    let imageContainerRef = useRef(null)

    const images = [slide1, slide2]

    const prev = () => imageContainerRef.current.scrollLeft -= 700

    const next = () => imageContainerRef.current.scrollLeft += 700

    return (
      <>
        <div className='page-container'>
          <div className='content'>
              <div className='prev' onClick={prev}></div>
              <div className='slide-panel' ref={imageContainerRef}>
                  {images.map(image => {return  (<img src={image} />)})}
              </div>
              <div className='next' onClick={next}></div>
          </div>
        </div>

        {/* <Routes>
          <Route path="/category/:categoryId" element={<Products />} />
          <Route path="/itemcategory/:itemCategoryId" element={<Products />} />
        </Routes> */}
      </>
    );
};

export default MainBaner;