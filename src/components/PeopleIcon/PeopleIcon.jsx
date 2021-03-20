import React from 'react';
import PropTypes from 'prop-types';
import './PeopleIcon.scss';
import male from '../../../public/male.png';
import female from '../../../public/female.png';
import unknown from '../../../public/gear.png';
import hermaphrodite from '../../../public/hermaphrodite.png';

const PeopleListItemLogo = ({ item }) => {
  const icons = {
    male,
    female,
    'n/a': unknown,
    hermaphrodite,
  };

  return <img className="people-icon" src={icons[item.gender]} alt="" />;
};

PeopleListItemLogo.propTypes = {
  item: PropTypes.instanceOf(Object),
};

PeopleListItemLogo.defaultProps = {
  item: {},
};

export default PeopleListItemLogo;
