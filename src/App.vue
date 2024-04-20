<template>
  <div>
    <h1>Methods</h1>
    <ArraysComponent />
    <div class="insertNumber"><input type="number" v-model="data.numberUser" class="input-blue"></div>
    <div class="container">
      <div>
        <button @click="data.actions.pushArray(data.numberUser)" class="button-blue">push</button>
        <span>aggiungi un numero all'array</span>
      </div>
      <div>
        <button @click="data.actions.atArray(data.numberUser)" class="button-blue">at</button>
        <span>ritorna l'elemento dell'array con quell'indice: {{ data.numberAt }}</span>
      </div>
       <div>
        <button @click="data.actions.copyWithinArray(data.x, data.y)" class="button-green">copyWithin</button>
        <span>  Copy to index <input type="number" v-model="data.x" class="input-green"> all elements from index <input type="number" v-model="data.y" class="input-green"> to the end</span>
      </div> 
      <div>
        <button @click="data.actions.entriesArray()" class="button-blue">arrayIterator</button>
        <span v-for="(array, index) in data.arrayIterator">{{ array }}</span>
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

.input-blue {
  border: 4px solid rgb(85, 97, 226);
}

.input-green {
  border: 4px solid rgb(80, 148, 71);
}

.button-blue {
  padding: 8px;
  color: white;
  background-color: rgb(85, 97, 226);
  border-radius: 10px;
  margin-right: 10px;
}

.button-green {
  padding: 8px;
  color: white;
  background-color: rgb(80, 148, 71);
  border-radius: 10px;
  margin-right: 10px;
}
</style>
