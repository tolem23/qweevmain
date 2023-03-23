<template>
    <div :class="Intro" class="ml-[13%] mt-[4%] text-white md:w-[45%]">
        <h1 class="md:text-7xl">The trusted platform for perfect match</h1>
        <p class="mt-[5%] md:w-[80%] md:text-xl">
            Qweev’s clinically-sound, inclusive platform supports members 
            with personalized, holistic care for every step of their reproductive 
            and family health journey.
        </p>
        <div class="pb-32 gap-4 flex mt-[5%]">
            <Button class="" msg="Get Started"/>
            <button class="bg-white text-[#6750A4] px-4 rounded">Learn more Qweev</button>
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