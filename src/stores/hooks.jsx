import React, { useContext } from 'react';
import { storesContext } from './stores';

export const useStores = () => React.useContext(storesContext);

export const useStore = (name) => useContext(storesContext)[name];
