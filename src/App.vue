<template>
  <div>
<h1>hello</h1>
<ArraysComponent/>
<button @click="data.actions.pushArray(data.numberUser)">push</button>
<input type="number" v-model="data.numberUser">
  </div>
</template>

<script>
import { data } from "./data.js";
import ArraysComponent from './components/ArraysComponent.vue'
  export default {
    name: 'App',
    data() {
      return {
      data
    }
    },
    components: {
      ArraysComponent,
    }
  }
</script>

<style lang="scss" scoped>

</style>
