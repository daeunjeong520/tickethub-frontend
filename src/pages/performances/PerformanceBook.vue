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
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"> 
                <div class="col p-4 d-flex flex-column position-static">
                    <strong class="d-inline-block mb-2 text-primary-emphasis">좌석정보</strong>
                    <h3 class="mb-0">{{ seat.seatType }}석</h3>
                    <div class="mb-1 text-body-secondary">남은 좌석 : {{ seat.totalSeat }}석</div>
                    <p class="card-text mb-auto">{{ seat.price }}원</p>
                    
                    <!-- 선택  -->
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="state.selectOption" v-bind:value="seat.seatId">
                        <label class="form-check-label" for="flexRadioDefault1">선택</label>
                        {{ state.selectOption }}
                    </div>
                </div>
            </div>
        </div>
        


        <!-- TODO: 예매 기능 -->
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3" @click="book">예매하기</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="goback">뒤로가기</button>
      </div>
    </main>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import router from "@/scripts/router";
axios.defaults.withCredentials = true; 

export default {
    name: "PerformanceBook",
    setup() {
        const route = useRoute();
        const id = route.params.id;
        const state = reactive({
            seats: {},
            selectOption: ""
        })

        // 좌석 정보
        axios.get("/api/performances/" + id)
        .then((res) => {
            state.seats = res.data.seats
        })

        // 예매하기
        const book = () => {
            const args = {
                seatId: state.selectOption,
                seatNum: 1
            }

            axios.post("/api/books", args)
                .then((res) => {
                    alert("예매가 완료되었습니다")
                    router.push({path: "/my/books"})
                })
                .catch((err) => {
                    alert("로그인이 필요한 서비스입니다")
                    router.push("/login")
                })
        }


        // 뒤로가기
        const goback = () => {
            router.go(-1)
        }

        return { route, id, state, goback, book }
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 2rem;
}

</style>