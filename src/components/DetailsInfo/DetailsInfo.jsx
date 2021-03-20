import React from 'react';
import PropTypes from 'prop-types';
import './DetailsInfo.scss';
import PeopleIcon from '../PeopleIcon/PeopleIcon';
import DetailsList from './DetailsList/DetailsList';

const DetailsInfo = ({ item }) => (
  <div className="details-info">
    <div className="details-info__head">
      <PeopleIcon item={item} />
      <h1 className="details-info__name">
        {item.name}
      </h1>
    </div>
    <DetailsList item={item} />
  </div>
);

DetailsInfo.propTypes = {
  item: PropTypes.instanceOf(Object),
};

DetailsInfo.defaultProps = {
  item: {},
};

export default DetailsInfo;
