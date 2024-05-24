<!-- 콘서트 상세 페이지  -->
<template>
  <div class="container">
        <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <img :src="`${state.performance.posterPath}`" />
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">{{ state.performance.name }}</h1>
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <th scope="row">공연시간</th>
                            <td>{{ state.performance.viewingHours }}시간</td>
                        </tr>
                        <tr>
                            <th scope="row">공연날짜</th>
                            <td>{{ state.performance.date }}</td>
                        </tr>
                        <tr>
                            <th scope="row">출연진</th>
                            <td>{{ state.performance.cast }}</td>
                        </tr>
                        <tr>
                            <th scope="row">장소</th>
                            <td>{{ state.performance.location}}</td>
                        </tr>
                    </tbody>
                    </table>

                <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                </div> -->
                
            </div>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
             <router-link :to="{path: `/performances/${id}/book`}">
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">예매하기</button>
             </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { useRoute } from "vue-router";
axios.defaults.withCredentials = true; 

export default {
    name: "PerformanceDetail",
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            performance: {},
            seats: {}
        })

        axios.get("/api/performances/" + id).then((res) => {
            state.performance = res.data;
            state.seats = state.performance.seats       
        })

        return { route, id, state }
    }
}
</script>

<style scoped>
img {
    display: inline-block;
    width: 50%;
    height: 50%;
    background-size: cover;
    background-position: center;
}
th {
    color: grey;
}
</style>