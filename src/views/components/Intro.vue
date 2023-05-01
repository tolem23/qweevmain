<template>
    <div :class="Intro" class="mt-[20%] mr-[15%] md:mt-[15%] w-[75%] mx-auto  text-white ">
        <h1 class="" >Your miracle within reach!  <br class="hidden sm:flex">It all starts here! </h1>
        <p class="mt-[5%] sm:w-[50%] lg:w-[45%] sm:text-xl " style=" font-weight:bold; text-shadow:none;">
            Qweev’s clinically-sound, inclusive platform supports members
            with personalized, holistic care for every step of their reproductive
            and family health journey.
        </p>
        <div class="pb-32 gap-4 sm:flex mt-[5%]">
            <Button class="" msg="Get Started"/>
            <button class="bg-white text-[#6750A4] hover:text-white hover:bg-[#6750A4] mt-5 sm:mt-0 px-4 py-2 rounded-md">Learn more Qweev</button>
        </div>
    </div>
</template>

<script>
import Button from '../../components/Button.vue'
export default {
    components:{Button},    
}
</script>

<style>

</style>