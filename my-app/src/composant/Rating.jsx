import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
        <i key={i} className={`fa fa-star ${i < value ? 'active' : ''}`}></i>
      ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
