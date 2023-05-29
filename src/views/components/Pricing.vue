<template>
  <div class="w-[80%] md:w-[75%] lg:w-[66%] mx-auto grid md:grid-cols-3 sm:grid-cols-2 gap-10" >
    <PurpleCard  title="Basic" amount="Free"  :cardlist="[ {
            list: '24 hours request access',
          },
          {
            list: 'zero profile preview',
          },
          {
            list: 'zero donor booking',
          },]" />
    <PurpleCard   title="Standard" amount="N10,000"   :cardlist="[ {
            list: '72 hours request access',
          },
          {
            list: '3 donors preview',
          },
          {
            list: '1 donor booking',
          },]" />
    <PurpleCard  title="Premium" amount="N15,000"  :cardlist="[ {
            list: '72 days request access',
          },
          {
            list: 'unlimited donors preview',
          },
          {
            list: '3 donor booking',
          },]" />
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