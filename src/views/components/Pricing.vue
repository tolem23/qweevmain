<template>
  <div class="w-[80%] md:w-[75%] lg:w-[66%] mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-10" >
    <PurpleCard  title="Basic" amount="Free"  cardlist="['24 hours', 'Zero Profile Preview', 'Zero Booking' ]" />
    <PurpleCard   title="Standard" amount="N10,000" />
    <PurpleCard  title="Premium" amount="N15,000"  />
  </div>
</template>

<script>
import PurpleCard from '../../components/PurpleCard.vue'

export default {
 components: {
      PurpleCard,
    },
}
</script>

<style>

</style>