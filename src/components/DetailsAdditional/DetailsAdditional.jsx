import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import DetailsAdditionalTab from './DetailsAdditionalTab';
import DetailsAdditionalList from './DetailsAdditionalList/DetailsAdditionalList';
import './DetailsAdditional.scss';
import { useStore } from '../../stores/hooks';

const DetailsAdditional = observer(({ item }) => {
  const [selected, setSelected] = useState('films');
  const store = useStore('detailsStore');

  const getIds = (data, key) => data[key] && data[key].map((elem) => parseInt(
    elem.split(`${key}/`)[1],
    10,
  ));

  useEffect(() => {
    if (selected) {
      const ids = getIds(item, selected);
      store.getAdditionalData(selected, ids);
    }
    return () => store.setTabsInfo(selected, []);
  }, [selected]);

  return (
    <div className="details-additional">
      <div className="details-additional__tabs">
        <DetailsAdditionalTab
          item={item}
          type="films"
          title="Films"
          callback={(value) => setSelected(value)}
          selected={selected}
        />
        <DetailsAdditionalTab
          item={item}
          type="starships"
          title="Starships"
          callback={(value) => setSelected(value)}
          selected={selected}
        />
        <DetailsAdditionalTab
          item={item}
          type="species"
          title="Species"
          callback={(value) => setSelected(value)}
          selected={selected}
        />
      </div>
      <DetailsAdditionalList data={store[selected]} />
    </div>
  );
});

DetailsAdditional.propTypes = {
  item: PropTypes.object.isRequired,
};

DetailsAdditional.defaultProps = {
  item: {},
};

export default DetailsAdditional;
