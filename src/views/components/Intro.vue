<template>
    <div :class="Intro" class="w-[80%] mx-auto mt-[4%] text-white ">
        <h1 class="md:text-7xl">The trusted platform for perfect match</h1>
        <p class="mt-[5%] md:w-[50%] md:text-xl text-white">
            Qweev’s clinically-sound, inclusive platform supports members 
            with personalized, holistic care for every step of their reproductive 
            and family health journey.
        </p>
        <div class="pb-32 gap-4 flex mt-[5%]">
            <Button class="" msg="Get Started"/>
            <button class="bg-white text-[#6750A4] hover:text-white hover:bg-[#6750A4] px-4 rounded">Learn more Qweev</button>
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