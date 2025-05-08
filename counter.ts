import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }), 
  actions: {
    incrementCounter() {
      this.count++; 
    }, 
    decrementCounter() {
      this.count--; 
    }
  }, 
  getters: {
    oddOrEven: (state) => {
      if(state.count % 2 == 0) return 'even'
      return 'odd'
    }
  }
})
