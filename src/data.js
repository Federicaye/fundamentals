import { reactive } from 'vue';
export const data = reactive({
    arrayNumbers: [1, 2, 3, 4, 5, 6],
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
        }
        
        

    },
    numberUser: "10",
    numberAt: "",
    arrayIterator: []

})
/*  pushArray(array) {
           array.push(2);
           console.log(array);
       }, */
/* si può chiamate ad esempio @click="data.actions.pushArray" */