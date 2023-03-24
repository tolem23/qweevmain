<template>
  <div class="mb-20" :class="AboutUs">
  <div class=" md:w-[80%] lg:mt-[10%] w-[80%] sm:w-[95%] mx-auto mt-[5%] mx-auto grid md:grid-cols-2 sm:grid-cols-5 md:gap-48 gap-10">
    <img src="../../assets/img/family.png" class=" sm:min-h-md  md:min-h-lg sm:col-span-2 md:col-span-1">
    <div class=" sm:col-span-3 md:col-span-1 ">
        <h2 class=" md:text-start ">Who we are and what we stand for</h2>
        <p class="mt-[5%] text-start font-normal text-sm sm:text-base lg:text-lg ">
            The state of the nation welfare rests solely on us as we 
            acts as the intermediary between a donor and a patient. 
            The purpose of the patient portal is to create a platform 
            on the database where patients can access a variety of 
            donors that possibly fits their profile for egg donation.
            <br>
            <br>
            The state of the nation welfare rests solely on us as we 
            acts as the intermediary between a donor and a patient. 
            The purpose of the patient portal is to create a platform 
            on the database where patients can access a variety of 
            donors that possibly fits their profile for egg donation.
        </p>
        <Button buttonClass=" w-full md:w-[100%] sm:w-[50%] py-3 mx-auto mt-[10%]"/>
    </div>
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