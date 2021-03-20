import React from 'react';
import peopleListStore from './peopleListStore';
import detailsStore from './detailsStore';
import favoritesStore from './favoritesStore';

export const stores = Object.freeze({
  peopleListStore,
  detailsStore,
  favoritesStore,
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
