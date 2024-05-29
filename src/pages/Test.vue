<template>
  <main>

  <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <router-link to="/performances/18" class="text">
            <div class="carousel-item active">
                <img src="/img/imgA.png" width="100%" height="100%" alt="">
                <div class="container">
                <div class="carousel-caption text-start">
                </div>
                </div>
            </div>
        </router-link>
      
        <router-link to="/performances/7" class="text">
            <div class="carousel-item">
                <img src="/img/imgB.png" width="100%" height="100%" alt="">
                <div class="container">
                <div class="carousel-caption text-start">
                </div>
                </div>
            </div>
        </router-link>
        <router-link to="/performances/10" class="text">
            <div class="carousel-item">
                <img src="/img/imgC.png" width="100%" height="100%" alt="">
                <div class="container">
                <div class="carousel-caption text-start">
                </div>
                </div>
            </div>
        </router-link>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</main>
</template>

<script>
import axios from "axios"
import { reactive } from "vue"


export default {
    name: "Test",
    setup() {
        const state = reactive({
            performance: ""
        })

        axios.get("/api/performances/1").then(res => {
            state.performance = res.data
        })

        return { state}
    }
}
</script>

<style scoped>
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
</style>