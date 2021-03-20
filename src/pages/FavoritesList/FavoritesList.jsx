import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import PeopleList from '../../components/PeopleList/PeopleList';
import SideBar from '../../components/SideBar/SideBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useStore } from '../../stores/hooks';

import './FavoritesList.scss';

const FavoritesList = observer(() => {
  const favoritesStore = useStore('favoritesStore');
  const { favorites } = favoritesStore;
  const [changed, setChange] = useState();

  const filterChange = ({ array, key }) => {
    if (key) {
      setChange(array);
    } else {
      setChange();
    }
  };

  useEffect(() => {
    favoritesStore.getFavoritesFromLocalStorage();

    return () => favoritesStore.resetFavorites();
  }, []);

  return (
    <div className="favorites-list-page">
      <div className="scroll-container">
        <PeopleList data={changed || favorites} />
      </div>
      <SideBar>
        <SearchBar data={favorites} setChange={filterChange} />
      </SideBar>
    </div>
  );
});

export default FavoritesList;
