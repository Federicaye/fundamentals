import { reactive } from 'vue';
export const data = reactive({
    arrayNumbers: [1, 2, 3, 4, 5, 6],
    actions: {
        pushArray(n) {
            data.arrayNumbers.push(n);
            console.log(data.arrayNumbers);
        },

    },
    numberUser: "8",

})
/*  pushArray(array) {
           array.push(2);
           console.log(array);
       }, */
/* si può chiamate ad esempio @click="data.actions.pushArray" */