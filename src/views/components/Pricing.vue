<template>
  <div class="w-[80%] md:w-[75%] lg:w-[66%] mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-10" >
    <PurpleCard  />
    <PurpleCard  />
    <PurpleCard  />
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