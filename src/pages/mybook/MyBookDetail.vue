<template>
  <div>
     <div class="container">
        <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <img :src="`${state.book.posterPath}`" />
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold lh-1 mb-3">{{ state.book.name }}</h1>
                <table class="table table-borderless">
                    <tbody>
                        <tr>
                            <th scope="row">공연시간</th>
                            <td>{{ state.book.viewingHours }}시간</td>
                        </tr>
                        <tr>
                            <th scope="row">공연날짜</th>
                            <td>{{ state.book.date }}</td>
                        </tr>
                        <tr>
                            <th scope="row">출연진</th>
                            <td>{{ state.book.cast }}</td>
                        </tr>
                        <tr>
                            <th scope="row">장소</th>
                            <td>{{ state.book.location}}</td>
                        </tr>
                        <tr>
                            <th scope="row">좌석 타입</th>
                            <td>{{ state.book.seatType}}</td>
                        </tr>
                         <tr>
                            <th scope="row">좌석 개수</th>
                            <td>{{ state.book.bookSeatNum}}좌석</td>
                        </tr>
                         <tr>
                            <th scope="row">결제 가격</th>
                            <td>{{ state.book.bookPrice}}원</td>
                        </tr>
                         <tr>
                            <th scope="row">결제 상태</th>
                            <td>결제 대기중</td>
                        </tr>
                    </tbody>
                    </table>
                <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                </div> -->
            </div>
        </div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
             <router-link :to="{path: `/my/books`}">
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">리스트로 돌아가기</button>
             </router-link>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from "axios"
import { useRoute } from "vue-router";
axios.defaults.withCredentials = true; 

export default {
    name: "MyBookDetail",
    setup() {
        const route = useRoute();
        const id = route.params.id;

        const state = reactive({
            book: ""
        })

        axios.get("/api/books/" + id)
            .then((res) => {
                state.book = res.data
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