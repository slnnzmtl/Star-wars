import React from 'react';
import PropTypes from 'prop-types';

const DetailsAdditionalTab = ({
  type, title, callback, selected,
}) => {
  const handleClick = () => {
    callback(type);
  };

  return (
    <button
      type="button"
      className={`details-additional__tab ${selected === type && 'selected'}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

DetailsAdditionalTab.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

DetailsAdditionalTab.defaultProps = {
  type: null,
  title: null,
  callback: null,
  selected: null,
};

export default DetailsAdditionalTab;
