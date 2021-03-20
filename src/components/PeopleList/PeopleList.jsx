import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import PeopleListItem from './ListItem/ListItem';
import './PeopleList.scss';

const PeopleList = observer(({ data }) => (
  <div className="people-list">
    {
        data
        && data.map((item) => <PeopleListItem item={item} key={item.name} />)
    }
  </div>
));

PeopleList.propTypes = {
  data: PropTypes.instanceOf(Array),
};

PeopleList.defaultProps = {
  data: [],
};

export default PeopleList;
