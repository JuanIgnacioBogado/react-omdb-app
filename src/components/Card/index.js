import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({ Title, Poster, Year, Type }) => (
  <div className="card">
    <img src={Poster} alt={Title} className="card-img-top" />
    <div className="card-body">
      <h2 className="card-title">{Title}</h2>
      {Year} - {Type}
    </div>
  </div>
);

Card.propTypes = {
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired
};
