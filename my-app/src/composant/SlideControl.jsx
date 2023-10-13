import React from 'react';
import '../styles/arrow.scss'; 

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};
