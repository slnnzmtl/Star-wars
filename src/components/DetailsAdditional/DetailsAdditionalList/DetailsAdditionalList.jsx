import React from 'react';
import PropTypes from 'prop-types';
import Item from './DetailsAdditionalListItem';
import './DetailsAdditionalList.scss';

const DetailsAdditionalList = ({ data }) => (
  <div className="details-additional__list">
    {
        data
        && data.map((item) => <Item className=".details-additional__list-item" item={item} key={item.title ? item.title : item.name} />)
    }
  </div>
);

DetailsAdditionalList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

DetailsAdditionalList.defaultProps = {
  data: [],
};

export default DetailsAdditionalList;
