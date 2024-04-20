<template>
    <div class="display">
        <div class="numbers">
            <div v-for="(number, index) in array" :key="index" class="number">
                <p>{{ number }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { data } from "../data.js";
export default {
    name: 'ArraysComponent',
    data() {
        return {
            data,
        }
    },
    props: ['array'],
}
</script>

<style lang="scss" scoped>
/* .display{
    position: fixed;
} */
.numbers {
    display: flex;
}

.number {
    margin: 10px;
    width: 50px;
    height: 50px;
    border: 2px solid black;
    line-height: 50px;
    text-align: center;
}
</style>