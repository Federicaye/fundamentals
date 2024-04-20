<template>
  <div>
    <h1>Methods</h1>
    <ArraysComponent />
    <div class="insertNumber"><input type="number" v-model="data.numberUser"></div>
    <div class="container">
      <div>
        <button @click="data.actions.pushArray(data.numberUser)">push</button>
        <span>aggiungi un numero all'array</span>
      </div>
      <div>
        <button @click="data.actions.atArray(data.numberUser)">at</button>
        <span>ritorna l'elemento dell'array con quell'indice: {{ data.numberAt }}</span>
      </div>
       <div>
        <button @click="data.actions.copyWithinArray(data.x, data.y)">copyWithin</button>
        <span>  Copy to index <input type="number" v-model="data.x"> all elements from index <input type="number" v-model="data.y"> to the end</span>
      </div> 
    </div>
  </div>
  <ButtonComponent @click="data.actions.pushArray(data.numberUser)" />
</template>

<script>
import { data } from "./data.js";
import ArraysComponent from './components/ArraysComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue'
export default {
  name: 'App',
  data() {
    return {
      data
    }
  },
  components: {
    ArraysComponent,
    ButtonComponent
  },

}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center
}

.insertNumber {
  text-align: center;
}
</style>
