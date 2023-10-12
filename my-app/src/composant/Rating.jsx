import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ value }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => (
         <FontAwesomeIcon key={i} icon={faStar} className={i < value ? 'active' : ''} />
      ))}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
