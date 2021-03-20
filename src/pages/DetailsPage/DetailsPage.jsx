import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import DetailsInfo from '../../components/DetailsInfo/DetailsInfo';
import DetailsAdditional from '../../components/DetailsAdditional/DetailsAdditional';
import AddToFavoritesButton from '../../components/AddToFavoritesButton/AddToFavoritesButton';

import { useStore } from '../../stores/hooks';

import './DetailsPage.scss';

const HeroDetails = observer(() => {
  const detailsStore = useStore('detailsStore');

  const { details } = detailsStore;
  const { id } = useParams();

  useEffect(() => {
    detailsStore.getPerson(id);

    return () => detailsStore.setDetails({});
  }, [id]);

  return (
    <div className="details-page">
      {
        details.name
        && (
        <>
          <div className="details-page__main">
            <DetailsInfo item={details} />
            <AddToFavoritesButton item={details} />
          </div>
          <DetailsAdditional item={details} />
        </>
        )
      }
    </div>
  );
});

export default HeroDetails;
