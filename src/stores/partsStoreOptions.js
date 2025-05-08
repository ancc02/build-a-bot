import { defineStore } from 'pinia';

export default defineStore('parts', {
  state: () => ({
    parts: null,
  }),

  actions: {
    async getParts() {
      const response = await fetch('/api/parts');
      this.parts = await response.json();
    },
  },
});
