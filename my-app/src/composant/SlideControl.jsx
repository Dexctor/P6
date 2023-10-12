import React from 'react';

export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: "block", color: "white", position: "absolute", top: "44%", right: "5%", transform: "translate(0, -50%)", zIndex: "1", opacity: "0.8" }}
        onClick={onClick}
      >
        <i className="fa fa-chevron-right" style={{ fontSize: '100px', color: 'white'}}></i>
      </div>
    );
};

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: "block", color: "white", position: "absolute", top: "44%", left: "1%", transform: "translate(0, -50%)", zIndex: "1", opacity: "0.8" }}
        onClick={onClick}
      >
        <i className="fa fa-chevron-left" style={{ fontSize: '100px', color: 'white'}}></i>
      </div>
    );
};
