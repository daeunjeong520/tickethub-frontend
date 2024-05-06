<template>
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"> 
        <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary-emphasis">좌석정보</strong>
            <h3 class="mb-0">{{ seat.seatType }}석</h3>
            <div class="mb-1 text-body-secondary">{{ seat.totalSeat }}석</div>
            <p class="card-text mb-auto">{{ seat.price }}원</p>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    선택
                </label>
            </div>

            <!-- <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
            <svg class="bi"><use xlink:href="#chevron-right"/></svg>
            </a> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "SeatItem",
    props: {
        seat: Object
    }
}
</script>

<style scoped>
.form-check {
    margin-top: 1rem;
}
</style>