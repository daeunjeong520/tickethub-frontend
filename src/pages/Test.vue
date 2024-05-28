<template>
    <div>
        {{ state.seats }}
        {{ state.rowArr }}
    </div>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "Test",
    setup() {
        const state = reactive({
            rowStart: "A",
            rowEnd: "F",
            colStart: 0,
            colEnd: 9,

            rowArr: [],
            seats: [],

            res: []
        })  

        const initSeat = () => {
            for(let i = state.rowStart.charCodeAt(); i <= state.rowEnd.charCodeAt(); i++) {
                state.rowArr.push(String.fromCharCode(i))
            }

            for(let i = 0; i < state.rowArr.length; i++) {
                const arr = []
                for(let j = 0; j <= state.colEnd; j++) {
                    arr.push(state.rowArr[i] + j)
                }
                state.seats.push(arr)
            }
        }
        initSeat()
        
        return { state }
    }
}
</script>

<style scoped>

</style>