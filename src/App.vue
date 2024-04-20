<template>
  <div>
    <h1>Methods</h1>
    <ArraysComponent />
    
    <div class="container">
      <div class="insertNumber"><input type="number" v-model="data.numberUser" class="input-blue"></div>
      <div>
        <button @click="data.actions.pushArray(data.numberUser)" class="button-blue">push</button>
        <span>aggiungi un numero all'array</span>
      </div>
      <div>
        <button @click="data.actions.atArray(data.numberUser)" class="button-blue">at</button>
        <span>ritorna l'elemento dell'array con quell'indice: {{ data.numberAt }}</span>
      </div>
       <div>
        <button @click="data.actions.copyWithinArray(data.variabileA, data.variabileB)" class="button-green">copyWithin</button>
        <span>  Copy to index <input type="number" v-model="data.variabileA" class="input-green"> all elements from index <input type="number" v-model="data.variabileB" class="input-green"> to the end</span>
      </div> 
      <div>
        <button @click="data.actions.entriesArray()" class="button-orange">entries</button>
        <span>returns an Array Iterator object with key/value pairs: </span>
        <span v-for="(array, index) in data.arrayIterator"> {{ array }}</span>
      </div>
      <div>
        <button @click="data.actions.fillArray(data.variabileC, data.variabileD, data.variabileE)" class="button-green">fill</button>
        <span>  Fill with <input type="number" v-model="data.variabileC" class="input-green"> from position <input type="number" v-model="data.variabileD" class="input-green">  until position <input type="number" v-model="data.variabileE"></span>
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

/* .insertNumber {
  text-align: center;
  
} */

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

.button-orange {
  padding: 8px;
  color: white;
  background-color: rgb(226, 97, 85);
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
