<template>
  <div class="w-[60%] md:w-[80%] mx-auto grid md:grid-cols-3 gap-10" >
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