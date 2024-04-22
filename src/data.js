import { reactive } from 'vue';
export const data = reactive({
    arrayNumbers: [1, 2, 3, 4, 5, 6],
    arrayNumbers2: [8, 7, 6, 5, 4, 3],

    actions: {
        pushArray(n) {
            data.arrayNumbers.push(n);
            console.log(data.arrayNumbers);
        },
        atArray(n) {
            data.numberAt = data.arrayNumbers.at(n);
        },
        copyWithinArray(x, y) {
            data.arrayNumbers.copyWithin(x, y);
        },
        entriesArray() {
            data.arrayIterator = data.arrayNumbers.entries();
            console.log(data.arrayIterator);
        },
        fillArray(x, y, z) {
            data.arrayNumbers.fill(x, y, z);
            console.log(data.arrayNumbers);
        },
        /* filterArray(){
            data.arrayNumbers2 = data.arrayNumbers.filter((n) =>  n < 4);
        }, */
        filterArray() {
            data.arrayNumbers2 = data.arrayNumbers.filter(this.greaterThan);
        },
        isGreaterThan(n) {
            return n >= +data.variabileF;
        },
        findIndexArray() {
            data.indexOf = data.arrayNumbers.findIndex(this.isGreaterThan);
            if (data.indexOf === "-1") {
                data.indexOf = "nessun valore soddisfa il criterio di ricerca"
            };
        },
        findArray() {
            data.findElement = data.arrayNumbers.find(this.isGreaterThan);
            console.log(data.findElement)
            if (data.findElement === undefined) {
                data.findElement = "nessun valore soddisfa il criterio di ricerca"
            };
        },
        isEven(n){
          data.evenNumber = data.arrayNumbers.find((n)=> n % 2 == 0)
        }
       
    },
    numberUser: "10",
    numberAt: "",
    arrayIterator: [],
    variabileA: "",
    variabileB: "",
    variabileC: "",
    variabileD: "",
    variabileE: "",
    variabileF: "",
    indexOf: "",
    findElement: "",
    evenNumber: ""

})
/*  pushArray(array) {
           array.push(2);
           console.log(array);
       }, */
/* si può chiamate ad esempio @click="data.actions.pushArray" */