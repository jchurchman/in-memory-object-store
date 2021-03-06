const shortid = require('shortid');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

const store = {
  items: [],
  getAll: () => store.items.slice(),
  save: (obj) => {
    obj._id = shortid.generate();
    store.items.push(obj);
    return obj;
  },
  get: (id) => {
    if (store.items.find((element) => {
      return element._id === id;
    }, id)) {
      return store.items.find((element) => {
        return element._id === id;
      }, id);
    } else {
      return null
    }
  },
  remove: (id) => {
    const indexOfItemToBeRemoved = store.items.findIndex( item => item._id === id );

    if (indexOfItemToBeRemoved !== -1) {
      store.items.splice(indexOfItemToBeRemoved, 1);
      return { removed: true };
    } else {
      return { removed: false };
    }

  }
};

module.exports = store;
