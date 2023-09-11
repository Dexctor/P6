import React from 'react';
import landscape from '../images/landscape.svg';


const ImageContainer = ({ imageUrl = landscape, showText = true,filterStyle }) => {
  return (
    <div className="image-container" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='filter' style={filterStyle}></div>
      {showText && <div className="text-center">Chez vous, partout et ailleurs</div>}
    </div>
  );
};
export default ImageContainer;
