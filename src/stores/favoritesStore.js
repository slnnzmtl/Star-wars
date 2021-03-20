import { observable } from 'mobx';

const favoritesStore = observable.object(
  {
    favorites: [],
    favoritesButton: false,

    setFavorites(value) {
      this.favorites = value;
      localStorage.setItem('favorites', JSON.stringify(this.favorites));

      return true;
    },

    addToFavorites(value) {
      this.getFavoritesFromLocalStorage()
        .then(() => {
          const { favorites } = this;
          if (Array.isArray(favorites)) {
            const filtered = favorites.filter((item) => item.name === value.name);

            if (!filtered.length) {
              this.setFavorites([...favorites, value]);
            }
          }
        });
    },

    resetFavorites() {
      this.favorites = [];
    },

    async getFavoritesFromLocalStorage() {
      const local = JSON.parse(localStorage.getItem('favorites'));
      if (Array.isArray(local)) {
        this.favorites = local;
      } else {
        this.favorites = [];
      }
      return local;
    },

    isFavorites(item) {
      const filtered = this.favorites.filter((elem) => elem.name === item.name);
      return !!filtered.length;
    },

    removeFromFavorites({ name }) {
      const { favorites } = this;
      const filtered = favorites.filter((elem) => elem.name !== name);

      return this.setFavorites(filtered);
    },
  },
);

export default favoritesStore;
