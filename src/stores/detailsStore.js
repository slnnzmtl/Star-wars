import { observable } from 'mobx';
import api from '../api';

const detailsStore = observable.object(
  {
    details: {},
    films: [],
    starships: [],
    species: [],

    setDetails(value) {
      this.details = value;
    },

    setTabsInfo(name, value) {
      this[name] = value;
    },

    getAdditionalData(name, ids) {
      const results = [];
      ids.forEach((id) => {
        this.query(name)(id)
          .then((response) => {
            results.push(response);

            if (results.length === ids.length) {
              this.setTabsInfo(name, results);
            }
          });
      });
    },

    getPerson(id) {
      api.getPerson(id, (res) => {
        this.setDetails(res);
      });
    },

    query(name) {
      return {
        films: api.getFilm,
        starships: api.getStarship,
        species: api.getSpecies,
      }[name];
    },
  },
);

export default detailsStore;
