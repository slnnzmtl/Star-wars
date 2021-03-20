import React from 'react';
import PropTypes from 'prop-types';

const DetailsList = ({ item }) => (
  <div className="details-info__list">
    <span className="details-info__list-item">
      <b>Height: </b>
      {item.height}
    </span>
    <span className="details-info__list-item">
      <b>Mass: </b>
      {item.mass}
    </span>
    <span className="details-info__list-item">
      <b>Hair color: </b>
      {item.hair_color}
    </span>
    <span className="details-info__list-item">
      <b>Skin color: </b>
      {item.skin_color}
    </span>
    <span className="details-info__list-item">
      <b>Eye color: </b>
      {item.eye_color}
    </span>
    <span className="details-info__list-item">
      <b>Birth year: </b>
      {item.birth_year}
    </span>
    <span className="details-info__list-item">
      <b>Gender: </b>
      {item.gender}
    </span>
  </div>
);

DetailsList.propTypes = {
  item: PropTypes.instanceOf(Object),
};

DetailsList.defaultProps = {
  item: {},
};

export default DetailsList;
