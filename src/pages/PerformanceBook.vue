<!-- 예매 상세 페이지  -->
<template>
    <main class="container">
        <!-- <div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
            <div class="col-lg-6 px-0">
                <h1 class="display-4 fst-italic">Title of a longer featured blog post</h1>
                <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                <p class="lead mb-0"><a href="#" class="text-body-emphasis fw-bold">Continue reading...</a></p>
            </div>
        </div> -->
        <h1>예매</h1>
        <div class="col" v-for="(seat, idx) in state.seats" :key="idx">
            <SeatItem :seat="seat"/>
        </div>
        <!-- TODO: 예매 기능 -->
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">예매하기</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">뒤로가기</button>
      </div>
    </main>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import SeatItem from "@/components/SeatItem.vue";

export default {
    name: "PerformanceBook",
    components: {
        SeatItem
    },
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            seats: {}
        })
        axios.get("/api/performances/" + id)
        .then((res) => {
            state.seats = res.data.seats
        })

        return { route, id, state }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 2rem;
}
</style>