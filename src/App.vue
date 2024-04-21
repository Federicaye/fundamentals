<template>
  <div >
    <div class="g-container">
      <div class="row">
        <ArraysComponent :array="data.arrayNumbers" class="col-6 array" />
        <ArraysComponent :array="data.arrayNumbers2" class="col-6 array" />
      </div>
    </div>
    <div class="ciao-container"><input type="number" v-model="data.numberUser" class="input-blue"></div>
    <div class="f-container">
      
      <div class="p-2">
        <button @click="data.actions.pushArray(data.numberUser)" class="button-blue">push</button>
        <span>aggiungi un numero all'array</span>
      </div>
      <div class="p-2">
        <button @click="data.actions.atArray(data.numberUser)" class="button-blue">at</button>
        <span>ritorna l'elemento dell'array con quell'indice: {{ data.numberAt }}</span>
      </div>
      <div class="p-2">
        <button @click="data.actions.copyWithinArray(data.variabileA, data.variabileB)"
          class="button-green">copyWithin</button>
        <span> Copy to index <input type="number" v-model="data.variabileA" class="input-green"> all elements from index
          <input type="number" v-model="data.variabileB" class="input-green"> to the end</span>
      </div>
      <div class="p-2">
        <button @click="data.actions.entriesArray()" class="button-orange">entries</button>
        <span>returns an Array Iterator object with key/value pairs: </span>
        <span v-for="(array, index) in data.arrayIterator"> {{ array }}</span>
      </div>
      <div class="p-2">
        <button @click="data.actions.fillArray(data.variabileC, data.variabileD, data.variabileE)"
          class="button-green">fill</button>
        <span> Fill with <input type="number" v-model="data.variabileC" class="input-green"> from position <input
            type="number" v-model="data.variabileD" class="input-green"> until position <input type="number"
            v-model="data.variabileE" class="input-green"></span>
      </div>
      <div class="p-2">
        <button @click="data.actions.filterArray(n)" class="button-green">filter</button>
        <span>filtra i numeri maggiori uguali di <input type="number" v-model="data.variabileF"
            class="input-green"></span>
      </div>
      <div class="p-2">
        <button @click="data.actions.findIndexArray(n)" class="button-green">findIndex</button>
        <span>ritorna l'indice del primo elemento maggiore o uguale a <input type="number" v-model="data.variabileF"
            class="input-green"> : {{ data.indexOf }}</span>
      </div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae impedit, sint, quis voluptatem ex aut perferendis eos repellat veritatis, officiis placeat voluptas eveniet ratione esse explicabo amet voluptatum. Repudiandae est at rem aspernatur esse libero praesentium aliquid cum laboriosam totam amet numquam iure dolorum quas enim a assumenda, provident dolorem voluptate ab! Ullam, repellat nam autem nisi laborum iste nulla sequi ab consequuntur et sint. Eum rem, vitae commodi deleniti voluptatibus impedit aliquid illum minima dicta illo in! Officiis, eum. Officia repellendus, perspiciatis voluptate autem vero animi culpa fuga esse. Possimus non labore mollitia, illo nostrum suscipit nulla, voluptate provident quaerat corporis iure! Tenetur ipsum nemo error veritatis doloremque, ex ab aliquam iste deserunt molestiae dolorum asperiores quam sit sequi nesciunt accusamus totam pariatur quibusdam adipisci iusto. Nam eum, voluptatum blanditiis nobis itaque repudiandae facere aspernatur dicta temporibus, magnam, est vitae fugit sapiente quos nesciunt dolorem saepe? Vitae, nesciunt. Distinctio veniam delectus consequatur accusantium magni vitae pariatur deleniti consectetur ab reiciendis ducimus omnis commodi natus repellat recusandae, mollitia earum in. Tempora laborum repellat corrupti veniam, sunt expedita beatae magni provident quibusdam reprehenderit ducimus, non nostrum. Quae recusandae nemo accusamus inventore quam reiciendis autem quos, perferendis, ex ullam omnis maiores explicabo ratione deleniti voluptatem facere reprehenderit pariatur quis voluptas magnam iusto? Odit fugit aliquam, reiciendis ab asperiores expedita quis dolores placeat modi, doloribus tempora, quo ut ullam exercitationem et recusandae sint nostrum praesentium provident suscipit numquam dolorum inventore. Ducimus nihil perspiciatis, tempore, molestiae et rem quas ipsam eos temporibus atque quos id numquam inventore obcaecati facere quae, repellat provident. Quia, tempore maxime commodi eum laborum vitae saepe velit qui nobis alias quam dolorum veniam ipsum corporis magni libero ducimus! Odit facere eligendi praesentium consequuntur fugit officiis, neque distinctio ex? Fugit architecto ea exercitationem minus. Tempora rem nulla minus quisquam earum quibusdam quo cumque. Necessitatibus provident, eveniet quo officiis laudantium itaque recusandae excepturi sapiente doloremque minima harum sequi magnam similique placeat? Libero illum illo architecto hic delectus voluptas dolor ut vero labore, sed fugit repellat enim omnis unde ea veniam sequi quis eligendi? Nesciunt, blanditiis provident autem, libero rerum a nihil porro vel dolor ipsa voluptatum reprehenderit, maiores asperiores eligendi nam consequatur explicabo deserunt obcaecati sint architecto! Debitis enim nemo magni illum perferendis aut error asperiores deleniti maiores quis tempore nulla, beatae laborum repellat, sapiente molestiae. Voluptas deserunt asperiores sed, veritatis perferendis ipsum corporis nam! Incidunt, quisquam. Sed totam consectetur suscipit pariatur accusantium vel ipsa voluptates omnis amet officiis labore molestias iusto autem doloremque sint, aliquam laborum dolorem possimus dolore? Recusandae veniam, saepe dolorum eum officia a sit dignissimos incidunt accusantium doloremque provident atque sapiente ut ratione amet explicabo quas cumque id quis harum corrupti animi distinctio! Eveniet repudiandae unde architecto, quisquam nisi perspiciatis, quam sit numquam soluta temporibus quis tempora, non voluptates? Minus blanditiis velit aliquid voluptatum in, quae perspiciatis sunt praesentium repudiandae reprehenderit. Molestias eaque, velit dicta magni voluptate officiis amet in odio qui obcaecati sequi saepe delectus officia doloribus quasi quidem dolore ratione reprehenderit quos cumque vitae recusandae.</p>
    </div>
  </div>
  <!--  <ButtonComponent @click="data.actions.pushArray(data.numberUser)" /> -->
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

.ciao-container {
 padding-left: 63px;
 padding-top: 10px;
  height: 50px;
}

.g-container {
  height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgb(255, 230, 230);
}

.f-container {
  height: calc(100vh - 250px);
  padding-left: 50px;
  padding-right: 50px;
  overflow-y: scroll;
}

.input-blue {
  border: 4px solid rgb(85, 97, 226);
  width: 70px;
}

.input-green {
  border: 4px solid rgb(80, 148, 71);
  width: 70px;
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

.array {
  
  padding: 20px 20px 20px 50px;
  
}
</style>
