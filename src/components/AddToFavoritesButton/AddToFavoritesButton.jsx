import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useStore } from '../../stores/hooks';

const addToFavoritesButton = observer(({ item }) => {
  const [condition, setCondition] = useState('false');
  const favoritesStore = useStore('favoritesStore');
  const { favorites } = favoritesStore;

  useEffect(() => {
    favoritesStore.getFavoritesFromLocalStorage();
  }, []);

  useEffect(() => {
    setCondition(favoritesStore.isFavorites(item));
  }, [favorites]);

  const addToFavorites = () => {
    favoritesStore.addToFavorites(item);
  };

  const removeFromFavorites = () => {
    favoritesStore.removeFromFavorites(item);
  };

  const button = {
    false: <button type="button" className="details-page__button" onClick={addToFavorites}>Add to Favorites</button>,
    true: <button type="button" className="details-page__button" onClick={removeFromFavorites}>Remove from Favorites</button>,
  };

  return button[condition];
});

export default addToFavoritesButton;
