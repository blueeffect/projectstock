<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
  export default {
    data() {
      return {
        stocks: [
          { id: 1, name: 'Google', price: 110},
          { id: 2, name: 'Apple', price: 200},
          { id: 3, name: 'IBM', price: 330},
          { id: 4, name: 'Microsoft', price: 8}
          ]
      }
    },
    components: {
      appStock: Stock
    }
  }
  
</script>