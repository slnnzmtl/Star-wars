import { observable } from 'mobx';
import api from '../api';

const peopleListStore = observable.object(
  {
    peopleList: [],

    favoritesList: [
      {
        name: 'Male Favorites',
        gender: 'male',
        id: 1,
      },
      {
        name: 'Female Favorites',
        gender: 'female',
        id: 2,
      },
      {
        name: 'Unknown Favorites',
        gender: 'unknown',
        id: 3,
      },
    ],

    filteredList: null,

    setPeopleList(values) {
      this.peopleList = values;
      // console.log(values);
    },
    setFilteredList(values) {
      this.filteredList = values;
    },

    async getPeopleList(page) {
      const result = await api.getPeople({ page });
      if (this.peopleList.length) {
        this.setPeopleList([...this.peopleList, ...result.results]);
      } else {
        this.setPeopleList(result.results);
      }
    },

    query(page) {
      return api.getPeople({ page });
    },
  },
);

export default peopleListStore;
