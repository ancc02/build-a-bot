import { defineStore } from 'pinia';

export default defineStore('cart', {
  state: () => ({
    cart: [],
  }),

  getters: {
    cartTotal: (state) => state.value.reduce((prev, cur) => prev += cur.cost, 0),
  },

});
