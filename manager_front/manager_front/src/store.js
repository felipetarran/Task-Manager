import { defineStore } from 'pinia'

export const useToken = defineStore('guardtoken', {
  // arrow function recommended for full type inference
  state: () => ({
      myToken: ''
  }),
})